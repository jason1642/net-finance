using net_finance.Models;
using NetFinance.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using net_finance.Hub;
using System.Net.WebSockets;

var builder = WebApplication.CreateBuilder(args);
var policyName = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllersWithViews();


builder.Services.Configure<NetFinanceDatabaseSettings>(
    builder.Configuration.GetSection("NetFinanceDatabase"));

builder.Services.AddSingleton<UsersService>();
builder.Services.AddSingleton<MonthlyHistoricDataService>();
builder.Services.AddSingleton<DailyHistoricDataService>();
builder.Services.AddSingleton<StockQuotesService>();
builder.Services.AddSingleton<CompanyProfileService>();
builder.Services.AddSingleton<ChatRoomService>();

builder.Services.AddSingleton<WebSocketHub>();



builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
        builder =>
        {
            builder
                .WithOrigins("https://netfinance.azurewebsites.net", "https://localhost:5187", "netfinance.azurewebsites.net", "https://localhost:7108", "wss://localhost:7108", "https://localhost:44465", "https://main.d2o3ilb4ej3w1a.amplifyapp.com/", "https://localhost:7025")
                //.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                
                .AllowCredentials();
        });
});


builder.Services.AddControllers()
    .AddJsonOptions(
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization();




builder.Services.AddAuthentication().AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters()
    {
        ValidateIssuer = true,
        ValidateAudience = true,

        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidAudience = builder.Configuration["Jwt:Audience"],
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
    options.Events = new JwtBearerEvents();

    options.Events.OnMessageReceived = context =>
    {

        if (context.Request.Cookies.ContainsKey("X-Access-Token"))
        {
            context.Token = context.Request.Cookies["X-Access-Token"];
        }
        return Task.CompletedTask;
    };
}).AddCookie("Cookies", options =>
{

    options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
    options.Cookie.IsEssential = true;
    //options.LoginPath = "/login";
    options.ExpireTimeSpan = TimeSpan.FromDays(1);
    // this is the key piece!

});
Console.WriteLine("Hello World!");










var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

if (app.Environment.IsDevelopment())
{
    app.MapGet("/debug/routes", (IEnumerable<EndpointDataSource> endpointSources) =>
        string.Join("\n", endpointSources.SelectMany(source => source.Endpoints)));
}
app.UseCors(policyName);

  // we have to add this. If you do not context.WebSockets.IsWebSocketRequest is always false
    app.UseWebSockets(new WebSocketOptions
    {
        KeepAliveInterval = TimeSpan.FromSeconds(120), // you cna set ping-pong time period in here
        ReceiveBufferSize = 4 * 1024 // you can specify buffer size here (default is 4kb)
    });

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.UseAuthentication();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");






   #region WebSocket
            // We need WebSocketHub for socket operations so we get it with GetService
            WebSocketHub _webSocketHub = (WebSocketHub)app.Services.GetService<WebSocketHub>();

            // If a request does not match any of the endpoints it will drop here 
            app.Use(async (context, next) =>
            {
                Console.WriteLine("Program.cs Console for websocket region start");
                try
                {
                    // You can check header and request in here. For example
                    // if(context.Response.Headers...)
                    // if(context.Request.Query...)
                    Console.WriteLine("Socket connect status:" + context.WebSockets.IsWebSocketRequest);
                    // We just check IsWebSocketRequest
                    if (context.WebSockets.IsWebSocketRequest)
                    {
                        // We accept the socket connection
                        WebSocket webSocket = await context.WebSockets.AcceptWebSocketAsync();

                        // we use underscore to discard return here because we do not have to waite return
                        _webSocketHub.AddSocket(webSocket);
                       
                        // We have to hold the context here if we release it, server will close it
                        while (webSocket.State == WebSocketState.Open)
                        {
                            await Task.Delay(TimeSpan.FromMinutes(1));
                        }

                        // if socket status is not open ,remove it
                        _webSocketHub.RemoveSocket(webSocket);

                        // check socket state if it is not closed, close it
                        if (webSocket.State != WebSocketState.Closed && webSocket.State != WebSocketState.Aborted)
                        {
                            await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Connection End", CancellationToken.None);
                        }
                    }
                    else
                    {
                        await next();
                    }
                }
                catch (Exception exp)
                {
                    //log ws connection error
                }
            });

            #endregion



app.Run();
