using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetFinance.Services;
using net_finance.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Collections.Generic;





namespace net_finance_api.Controllers
{
    //[Route("api/[controller]")]
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly UsersService _usersService;


        public UsersController(IConfiguration config, UsersService usersService)
        {
            _configuration = config;
            _usersService = usersService;

        
        }

        // GET: api/users
        [HttpGet]
        public async Task<List<Users>> Get() =>
            await _usersService.GetAsync();

 

        // GET: api/users/5
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Users>> Get(string id)
        {
            var user = await _usersService.GetAsync(id); 

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }
// GET: api/users/
        [HttpGet("check-email-exists/{email}")]
        public async Task<ActionResult> CheckEmailExists(string email)
        {
            var emailExists = await _usersService.GetAsyncEmail(email);

            if (emailExists is null)
            {
                return Ok(false);
            }

            return Ok(true);
        }
        // PUT: api/users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[AutoValidateAntiforgeryToken]
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> PutUsers(string id, Users updatedUser)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            updatedUser._id = user._id;
            updatedUser.updated_at = DateTime.Now;

            await _usersService.UpdateAsync(id, updatedUser);

            return NoContent();
        }

        // POST: api/users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Users newUser)
        {
            Users? emailExists = await _usersService.GetAsyncEmail(newUser.email);
            Users? usernameExists = await _usersService.GetAsyncUsername(newUser.username);
            if (emailExists != null) return BadRequest("Email already Exists");
            if (usernameExists != null) return BadRequest("Username is already taken");
            newUser.created_at = newUser.updated_at = DateTime.Now;
            newUser.password = BCrypt.Net.BCrypt.HashPassword(newUser.password, 12);
            newUser.portfolio = new Portfolio();
            //newUser.portfolio.positions = new Positions[0];
            //newUser.portfolio.account_value = 0;
            newUser.order_history = new OrderHistory[0];
            Console.WriteLine(newUser);
            
            await _usersService.CreateAsync(newUser);

            return CreatedAtAction(nameof(Get), newUser);
        } 

        // DELETE: api/users/5
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _usersService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            await _usersService.RemoveAsync(id);

            return NoContent();
        }

      

        [HttpPost("verify")]
        public async Task<IActionResult> Verify()
        {
            if (!(Request.Cookies.TryGetValue("X-Username", out var userName) && Request.Cookies.TryGetValue("X-Refresh-Token", out var refreshToken)))
                return BadRequest();

            Users? user = await _usersService.verifyToken(userName, refreshToken);
            if (user == null)
                return BadRequest();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            Claim[] claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("UserId", user._id.ToString()),
                new Claim("Username", user.username)
                                        };
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(10),
                signingCredentials: signIn).ToString();

            user.refresh_token = Guid.NewGuid().ToString();

            await _usersService.UpdateAsync(user._id, user);

            Response.Cookies.Append("X-Access-Token", token, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict, Domain = Environment.GetEnvironmentVariable("DOMAIN")});
            Response.Cookies.Append("X-Username", user.username, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict, Domain = Environment.GetEnvironmentVariable("DOMAIN") });
            Response.Cookies.Append("X-Refresh-Token", user.refresh_token, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict, Domain = Environment.GetEnvironmentVariable("DOMAIN") });

            return Ok(user);
        }
    

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("X-Access-Token", new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.Strict,
                Secure = true
            });
            Response.Cookies.Delete("X-Username", new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.Strict,
                Secure = true
            });
            Response.Cookies.Delete("X-Refresh-Token", new CookieOptions
            {
                HttpOnly = true,
                SameSite = SameSiteMode.Strict,
                Secure = true
            });
            return Ok();
        }

        // Post: api/Users/login
        [HttpPost("login")]
        public async Task<IActionResult?> Login([FromBody] Users userSignin)
        {



 
            if (ModelState.IsValid)
            {
                var user = await _usersService.Login(userSignin);

                if (user != null)
                {


                    Claim[] claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("UserId", user._id.ToString()),
                        new Claim("Username", user.username)
                        };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                              _configuration["Jwt:Issuer"],  
                              _configuration["Jwt:Audience"],
                              claims,
                              expires: DateTime.UtcNow.AddMinutes(10),
                              signingCredentials: signIn).ToString();

                    string RefreshToken = Guid.NewGuid().ToString();
                     
                    user.refresh_token = RefreshToken;
                    await _usersService.UpdateAsync(user._id, user);  

                    Response.Cookies.Append("X-Access-Token", token, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict, Domain = Environment.GetEnvironmentVariable("DOMAIN") });
                    Response.Cookies.Append("X-Username", user.username, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict, Domain = Environment.GetEnvironmentVariable("DOMAIN") });
                    Response.Cookies.Append("X-Refresh-Token", RefreshToken, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict, Domain = Environment.GetEnvironmentVariable("DOMAIN") });

                    return Ok(RefreshToken);
                }  
                else
                {
                    return BadRequest();  
                }
            }
            else
                return BadRequest(ModelState);

        }

        // Post: api/Users/UpdateProfilePicture
        [HttpPost("UpdateProfilePicture")]
        public async Task<IActionResult> updateProfilePicture([FromForm] IFormFile profilePicture)
        {
             if (!(Request.Cookies.TryGetValue("X-Username", out var username) && Request.Cookies.TryGetValue("X-Refresh-Token", out var refreshToken)))
                return BadRequest();
            Users? user = await _usersService.verifyToken(username, refreshToken);
            if (user == null) return BadRequest();

           await using (var ms = new MemoryStream())
            {

            profilePicture.CopyTo(ms);
            var fileBytes = ms.ToArray();
            string s = Convert.ToBase64String(fileBytes);
                        //  Console.WriteLine(s);
            // act on the Base64 data
                    user.profile_picture = new ImageModel 
                    {
                        image_data = fileBytes
                    };
            };
          var filter = Builders<Users>.Filter.Eq("_id", ObjectId.Parse(user._id));
   var update = Builders<Users>.Update.Set("profile_picture", user.profile_picture);
    await _usersService.FilterUpdateUser(filter, update);

    // _usersService.FilterUpdateUser(filter, update);

            return Ok(user);
        }






    public class UserEditForm
    {
        public string? username {get; set;}
        public string? email {get; set;}
    }
    // Post: api/Users/EditProfile
    [HttpPost("EditProfile")]
    public async Task<IActionResult> editProfile([FromBody] UserEditForm EditFields)
    {
        if (ModelState.IsValid)
            {
        if (!(Request.Cookies.TryGetValue("X-Username", out var username) && Request.Cookies.TryGetValue("X-Refresh-Token", out var refreshToken)))
            return BadRequest();
        Users? user = await _usersService.verifyToken(username, refreshToken);

        if (user == null) return BadRequest("Can't verify user, Cookies username does not match refreshToken");
        Console.WriteLine(EditFields);



        Users? emailExists = await _usersService.GetAsyncEmail(EditFields.email);
        
        Users? usernameExists = await _usersService.GetAsyncUsername(EditFields.username);
            if (emailExists != null && user.email != EditFields.email) return BadRequest(new {message = "That email already exists"});
            if (usernameExists != null && user.username != EditFields.username) return BadRequest("Username is already taken");

        // user.refresh_token = RefreshToken;


            if (user.email != EditFields.email){
                user.email = EditFields.email;
            }
         if (user.username != EditFields.username){
                user.username = EditFields.username;
            }

            await _usersService.UpdateAsync(user._id!, user); 

        return Ok(EditFields);

            }
        else
            return BadRequest();
            

      
    }





        // Post: api/Users/CreateNewOrder
        [HttpPost("CreateNewOrder")]
        public async Task<IActionResult> createBuyOrder([FromBody] OrderHistory order) 
        {
            if (!(Request.Cookies.TryGetValue("X-Username", out var username) && Request.Cookies.TryGetValue("X-Refresh-Token", out var refreshToken)))
                return BadRequest();
            Users? user = await _usersService.verifyToken(username, refreshToken);
            if (user == null) return BadRequest();

        //    var order = new OrderHistory
        //    {
        //        symbol = symbol,
        //        created_at = DateTime.Now,
        //        updated_at = DateTime.Now,
        //        price = price,
        //        quantity = quantity,
        //        action = action,
        //        status = "fulfilled" 
        //};
            var filter = Builders<Users>.Filter.Eq("_id", ObjectId.Parse(user._id));

              var update = Builders<Users>.Update.Push(x => x.order_history, new OrderHistory
            {
                symbol = order.symbol,
                created_at = DateTime.Now,
                updated_at = DateTime.Now,
                price = order.price,
                quantity = order.quantity,
                action = order.action,
                status = "fulfilled",
                currency = "USD"
            });

            await _usersService.FilterUpdateUser(filter, update);
            Console.WriteLine(user);
            
            return Ok(user);
        }

 // Post: api/Users/CreateAccountValueHistoryItem
        [HttpPost("CreateAccountValueHistoryItem")]
        public async Task<IActionResult> createAccountValueHistoryItem([FromBody] DailyAccountValueHistory historyItemData) 
        {
            if (!(Request.Cookies.TryGetValue("X-Username", out var username) && Request.Cookies.TryGetValue("X-Refresh-Token", out var refreshToken)))
                return BadRequest();
            Users? user = await _usersService.verifyToken(username, refreshToken);
            if (user == null) return BadRequest();

      
            var filter = Builders<Users>.Filter.Eq("_id", ObjectId.Parse(user._id));

              var update = Builders<Users>.Update.Push(x => x.portfolio.daily_account_value_history, new DailyAccountValueHistory
            {
                end_of_day_value = historyItemData.end_of_day_value,
                date = historyItemData.date,
                previous_business_day_value = historyItemData.previous_business_day_value,
                previous_business_day_date = historyItemData.previous_business_day_date
            });

            await _usersService.FilterUpdateUser(filter, update);
            Console.WriteLine(user);
            
            return Ok(user);
        }
        //private bool UsersExists(long id)
        //{
        //    return (_usersService.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        //}
    }
}
