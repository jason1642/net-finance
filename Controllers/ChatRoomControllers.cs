using Microsoft.AspNetCore.Mvc;
using NetFinance.Services;
using net_finance.Models;
using MongoDB.Driver;
using MongoDB.Bson;
// using SocketIOClient;
using WebSocketSharp;
using WebSocketSharp.Server;
using System.Security.Cryptography.X509Certificates;

using System.Net.NetworkInformation;
using System.Linq;
using System.Net;



namespace net_finance_api.Controllers
{
    //[Route("api/[controller]")]


    
    [Route("api/chatroom")]
    [ApiController]
    
    public class chatRoomController : ControllerBase
    {
        public IConfiguration _configuration;
   

        public WebSocketServer wssv;
        
        private readonly ChatRoomService _chatRoomService;
    

        public chatRoomController(IConfiguration config, ChatRoomService chatRoomService)
        {
            _configuration = config;
            _chatRoomService = chatRoomService;  
            int webSocketPort = 7890; // Change this to the port number of your WebSocket server

            var activeListeners = IPGlobalProperties.GetIPGlobalProperties().GetActiveTcpListeners();
            bool isWebSocketServerRunning = activeListeners.Any(l => l.Port == webSocketPort);
            var webSocketListeners = activeListeners.Where(l => l.Port == webSocketPort);


            
           
            
        }
            
        // GET: api/chatRoom
        [HttpGet]
        public async Task<List<ChatRoom>> Get() =>
            await _chatRoomService.GetAsync();



        // GET: api/chatRoom/5
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<ChatRoom>> Get(string id)
        {
            var room = await _chatRoomService.GetAsync(id);
            Console.WriteLine(room?._id);
            if (room is null)
            { 
                return NotFound();
            };
           
           
            try {
                wssv = new WebSocketServer (8080, true);
                wssv.SslConfiguration.ServerCertificate = new X509Certificate2 (
                    "/Users/jasoncruz/Documents/projects/net-finance/:USERPROFILE.aspnethttpsaspnetapp.pfx", "crypticpassword"
                    );
                wssv.AddWebSocketService<Laputa> ("/Laputa", s => s.IgnoreExtensions = true);
                Console.WriteLine("WebSocket server is now running.");

                wssv.Start ();
              
            }   
           catch
            {
                // new WebSocketServer ("ws://127.0.0.1:7890").Stop();
                // wssv = new WebSocketServer ("ws://127.0.0.1:7890");
                // wssv.AddWebSocketService<Laputa> ("/Laputa");
                // wssv.Start ();
                Console.WriteLine("A web socket server is already running or could not connect.");
                
            }

           
            
            if (wssv.IsListening) {
                Console.WriteLine (wssv.Address);
                // Console.WriteLine (wssv.ToString());

                 Console.WriteLine ("Listening on port {0}, and providing WebSocket services:", wssv.Port);

                foreach (var path in wssv.WebSocketServices.Paths)
                Console.WriteLine ("- {0}", path);
            } 
            wssv?.Stop();
            // Console.ReadKey ();
            Console.WriteLine("Testing before return line");

            return Ok(room);
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