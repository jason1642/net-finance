using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using SocketIOClient;



namespace NetFinance.Services;

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


    // public SocketIO _publicChatClient = new SocketIO("https://localhost:44465/chat");

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

    public UpdateResult FilterUpdateChatRoom (FilterDefinition<ChatRoom> filter, UpdateDefinition<ChatRoom> update) =>
        _ChatRoomCollection.UpdateOne(filter, update);

    public async Task RemoveAsync(string id) =>
        await _ChatRoomCollection.DeleteOneAsync(x => x._id == id);




}