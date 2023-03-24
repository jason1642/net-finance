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
    [Route("api/chatroom")]
    [ApiController]
    public class chatRoomController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly ChatRoomService _chatRoomService;


        public chatRoomController(IConfiguration config, ChatRoomService chatRoomService)
        {
            _configuration = config;
            _chatRoomService = chatRoomService;


        }

        // GET: api/chatRoom
        [HttpGet]
        public async Task<List<ChatRoom>> Get() =>
            await _chatRoomService.GetAsync();



        // GET: api/chatRoom/5
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<ChatRoom>> Get(string id)
        {
            var user = await _chatRoomService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/chatRoom/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[AutoValidateAntiforgeryToken]
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> PutchatRoom(string id, ChatRoom updatedUser)
        {
            var user = await _chatRoomService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            updatedUser._id = user._id;
            updatedUser.updated_at = DateTime.Now;

            await _chatRoomService.UpdateAsync(id, updatedUser);

            return NoContent();
        }



        // POST: api/chatRoom/message
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("message")]
        public async Task<IActionResult> Post([FromBody] SingleMessage messageInput)
        {
            //Check if user & room exists
            Console.WriteLine(messageInput.room_id);
            ChatRoom? room = await _chatRoomService.GetAsync(messageInput.room_id);
            if (room == null) return BadRequest(); 

            SingleMessage newMessage = new SingleMessage
            {
                _id = ObjectId.GenerateNewId(),
                created_at = DateTime.Now,
                updated_at = DateTime.Now,
                sender_id = messageInput.sender_id,
                message = messageInput.message,
                room_id = room._id,

            };
            var filter = Builders<ChatRoom>.Filter.Eq("_id", ObjectId.Parse(room._id));
            var update = Builders<ChatRoom>.Update.Push(x => x.messages, newMessage);

            _chatRoomService.FilterUpdateChatRoom(filter, update);

            return CreatedAtAction(nameof(Get), newMessage);
        }


        // POST: api/chatRoom
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] ChatRoom roomInput)
        {
            // Check if room exists
            var roomExists = await _chatRoomService.GetRoomAsync(roomInput.room_name);
           if(roomExists != null) return BadRequest();

            ChatRoom newRoom = new ChatRoom();
            
            newRoom.created_at = DateTime.Now;
            newRoom.updated_at = DateTime.Now;
            newRoom.messages = new SingleMessage[0];
            newRoom.room_name = roomInput.room_name;
            await _chatRoomService.CreateAsync(newRoom);
            return CreatedAtAction(nameof(Get), newRoom);
        }
















        // DELETE: api/chatRoom/5
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _chatRoomService.GetAsync(id);

            if (user is null)
            {
                return NotFound();
            }

            await _chatRoomService.RemoveAsync(id);

            return NoContent();
        }




    }

}