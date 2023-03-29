using net_finance.Models;
using NetFinance.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using SocketIOClient;
using net_finance.Hub;


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

builder.Services.AddSingleton(typeof(WebSocketHub), new WebSocketHub());



builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
        builder =>
        {
            builder
                .WithOrigins("https://net-finance.azurewebsites.net", "https://localhost:5187", "https://brave-stone-0d5d9f810.2.azurestaticapps.net", "netfinance.azurewebsites.net", "https://localhost:7108", "wss://localhost:7108", "https://localhost:44465", "https://main.d1pbrktrl7a0d8.amplifyapp.com", "https://localhost:7025")
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
app.UseCors(policyName);

// app.UseWebSockets();


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

app.Run();

