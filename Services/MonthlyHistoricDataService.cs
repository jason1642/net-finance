using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;



namespace NetFinance.Services;

public class MonthlyHistoricDataService
{
    private readonly IMongoCollection<MonthlyHistoricData> _MonthlyHistoricDataCollection;


    public MonthlyHistoricDataService(
        IOptions<NetFinanceDatabaseSettings> netFinanceDatabaseSettings)
    {
        System.Diagnostics.Debug.WriteLine(netFinanceDatabaseSettings);

        var mongoClient = new MongoClient(
            netFinanceDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            netFinanceDatabaseSettings.Value.DatabaseName);

        _MonthlyHistoricDataCollection = mongoDatabase.GetCollection<MonthlyHistoricData>(
            netFinanceDatabaseSettings.Value.MonthlyHistoricDataCollectionName);
    }

    public async Task<List<MonthlyHistoricData>> GetAsync() =>
        await _MonthlyHistoricDataCollection.Find(_ => true).ToListAsync();

    public async Task<MonthlyHistoricData?> GetAsync(string symbol) =>
        await _MonthlyHistoricDataCollection.Find(x => x.symbol == symbol).FirstOrDefaultAsync();

    //public async Task<Users?> GetAsyncEmail(string email) =>
    //await _MonthlyHistoricDataCollection.Find(x => x.email == email).FirstOrDefaultAsync();


    //public async Task<Users?> GetAsyncUsername(string username) =>
    //await _MonthlyHistoricDataCollection.Find(x => x.username == username).FirstOrDefaultAsync();


    public async Task CreateAsync(MonthlyHistoricData newItem) =>
        await _MonthlyHistoricDataCollection.InsertOneAsync(newItem);


    public async Task UpdateAsync(string id, MonthlyHistoricData updatedItem) =>
        await _MonthlyHistoricDataCollection.ReplaceOneAsync(x => x._id == id, updatedItem);

    //public async Task RemoveAsync(string id) =>
    //    await _MonthlyHistoricDataCollection.DeleteOneAsync(x => x._id == id);

    //public async Task<Users?> verifyToken(string username, string cookie_token) =>
    //    await _MonthlyHistoricDataCollection.Find(i => i.username == username && i.refresh_token == cookie_token).FirstOrDefaultAsync();



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