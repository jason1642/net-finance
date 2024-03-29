using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using WebSocketSharp.Server;
using WebSocketSharp;



namespace NetFinance.Services;
//  public class PublicChatSocket : WebSocketBehavior
//   {
    // protected override void OnMessage (MessageEventArgs e)
    // {
    //   var msg = e.Data == "BALUS"
    //             ? "Are you kidding?"
    //             : "I'm not available now.";

    //   Send (msg);
    // }
//   } 
//    public class Laputa : WebSocketBehavior
//   {
//     protected override void OnMessage(MessageEventArgs e) 
//     {
//       Console.WriteLine("Sending default message for on open state: On Open", e);
//             // Send("This message was sent on open");
//     }
//   }

public class ChatRoomService
{
    private readonly IMongoCollection<ChatRoom> _ChatRoomCollection;


    public ChatRoomService(
        IOptions<NetFinanceDatabaseSettings> netFinanceDatabaseSettings)
    {
        System.Diagnostics.Debug.WriteLine(netFinanceDatabaseSettings);

        var mongoClient = new MongoClient(
            netFinanceDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            netFinanceDatabaseSettings.Value.DatabaseName);

        _ChatRoomCollection = mongoDatabase.GetCollection<ChatRoom>(
            netFinanceDatabaseSettings.Value.ChatRoomCollectionName);






    }


    // public SocketIO _publicChatSocket = new SocketIO("localhost:7108");


    public async Task<List<ChatRoom>> GetAsync() =>
        await _ChatRoomCollection.Find(_ => true).ToListAsync();

    public async Task<ChatRoom?> GetAsync(string id) =>
        await _ChatRoomCollection.Find(x => x._id == id).FirstOrDefaultAsync();


    public async Task<ChatRoom?> GetRoomAsync(string roomName) =>
        await _ChatRoomCollection.Find(x => x.room_name == roomName).FirstOrDefaultAsync();

    public async Task CreateAsync(ChatRoom newRoom) =>
        await _ChatRoomCollection.InsertOneAsync(newRoom);


    public async Task UpdateAsync(string id, ChatRoom updatedMessage) =>
        await _ChatRoomCollection.ReplaceOneAsync(x => x._id == id, updatedMessage);

    public async Task<UpdateResult> FilterUpdateChatRoom (FilterDefinition<ChatRoom> filter, UpdateDefinition<ChatRoom> update) =>
        await _ChatRoomCollection.UpdateOneAsync(filter, update);

    public async Task RemoveAsync(string id) =>
        await _ChatRoomCollection.DeleteOneAsync(x => x._id == id);




}