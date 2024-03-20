using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;



namespace NetFinance.Services;

public class UsersService
{
    private readonly IMongoCollection<Users> _usersCollection;


    public UsersService(
        IOptions<NetFinanceDatabaseSettings> netFinanceDatabaseSettings)
    {
        System.Diagnostics.Debug.WriteLine(netFinanceDatabaseSettings);

        var mongoClient = new MongoClient(
            netFinanceDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            netFinanceDatabaseSettings.Value.DatabaseName);

        _usersCollection = mongoDatabase.GetCollection<Users>(
            netFinanceDatabaseSettings.Value.UsersCollectionName);
    }

    public async Task<List<Users>> GetAsync() =>
        await _usersCollection.Find(_ => true).ToListAsync();

    public async Task<Users?> GetAsync(string id) =>
        await _usersCollection.Find(x => x._id == id).FirstOrDefaultAsync();

    public async Task<Users?> GetAsyncEmail(string? email) =>
    await _usersCollection.Find(x => x.email == email).FirstOrDefaultAsync();


    public async Task<Users?> GetAsyncUsername(string? username) =>
    await _usersCollection.Find(x => x.username == username).FirstOrDefaultAsync();


    public async Task CreateAsync(Users newUser) =>
        await _usersCollection.InsertOneAsync(newUser);


    public async Task UpdateAsync(string id, Users updatedUser) =>
        await _usersCollection.ReplaceOneAsync(x => x._id == id, updatedUser);

    public  async Task FilterUpdateUser(FilterDefinition<Users> filter, UpdateDefinition<Users> update) =>
        await _usersCollection.UpdateOneAsync(filter, update);

    public async Task RemoveAsync(string id) =>
        await _usersCollection.DeleteOneAsync(x => x._id == id);

    public async Task<Users?> verifyToken(string username, string cookie_token) =>
        await _usersCollection.Find(i => i.username == username && i.refresh_token == cookie_token).FirstOrDefaultAsync();


    

    public async Task<Users?> Login(Users user)
    {
        Users matchingUser = await _usersCollection.Find(x => x.username == user.username).FirstOrDefaultAsync();
        bool isValidPassword = BCrypt.Net.BCrypt.Verify(user.password, matchingUser.password);
        if (isValidPassword)
        {
            return matchingUser;
        }
        return null;
    }
        
    

}