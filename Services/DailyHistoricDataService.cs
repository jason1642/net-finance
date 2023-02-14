using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;



namespace NetFinance.Services;

public class DailyHistoricDataService
{
    private readonly IMongoCollection<DailyHistoricData> _DailyHistoricDataCollection;


    public DailyHistoricDataService(
        IOptions<NetFinanceDatabaseSettings> netFinanceDatabaseSettings)
    {
        System.Diagnostics.Debug.WriteLine(netFinanceDatabaseSettings);

        var mongoClient = new MongoClient(
            netFinanceDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            netFinanceDatabaseSettings.Value.DatabaseName);

        _DailyHistoricDataCollection = mongoDatabase.GetCollection<DailyHistoricData>(
            netFinanceDatabaseSettings.Value.DailyHistoricDataCollectionName);
    }

    public async Task<List<DailyHistoricData>> GetAsync() =>
        await _DailyHistoricDataCollection.Find(_ => true).ToListAsync();

    public async Task<DailyHistoricData?> GetAsync(string symbol) =>
        await _DailyHistoricDataCollection.Find(x => x.symbol == symbol).FirstOrDefaultAsync();

    //public async Task<Users?> GetAsyncEmail(string email) =>
    //await _DailyHistoricDataCollection.Find(x => x.email == email).FirstOrDefaultAsync();


    //public async Task<Users?> GetAsyncUsername(string username) =>
    //await _DailyHistoricDataCollection.Find(x => x.username == username).FirstOrDefaultAsync();


    public async Task CreateAsync(DailyHistoricData newItem) =>
        await _DailyHistoricDataCollection.InsertOneAsync(newItem);


    public async Task UpdateAsync(string id, DailyHistoricData updatedItem) =>
        await _DailyHistoricDataCollection.ReplaceOneAsync(x => x._id == id, updatedItem);

    public async Task<List<DailyHistoricData>> FindMultipleAsync(FilterDefinition<DailyHistoricData> filter) =>
        await _DailyHistoricDataCollection.Find(filter).ToListAsync();
    //public async Task RemoveAsync(string id) =>
    //    await _DailyHistoricDataCollection.DeleteOneAsync(x => x._id == id);

    //public async Task<Users?> verifyToken(string username, string cookie_token) =>
    //    await _DailyHistoricDataCollection.Find(i => i.username == username && i.refresh_token == cookie_token).FirstOrDefaultAsync();



    //public async Task<Users?> Login(Users user)
    //{
    //    Users matchingUser = await _usersCollection.Find(x => x.username == user.username).FirstOrDefaultAsync();
    //    bool isValidPassword = BCrypt.Net.BCrypt.Verify(user.password, matchingUser.password);
    //    if (isValidPassword)
    //    {
    //        return matchingUser;
    //    }
    //    return null;
    //}



}