using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;



namespace NetFinance.Services;

public class CompanyProfileService
{
    private readonly IMongoCollection<CompanyProfile> _CompanyProfileCollection;


    public CompanyProfileService(
        IOptions<NetFinanceDatabaseSettings> netFinanceDatabaseSettings)
    {
        System.Diagnostics.Debug.WriteLine(netFinanceDatabaseSettings);

        var mongoClient = new MongoClient(
            netFinanceDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            netFinanceDatabaseSettings.Value.DatabaseName);

        _CompanyProfileCollection = mongoDatabase.GetCollection<CompanyProfile>(
            netFinanceDatabaseSettings.Value.CompanyProfileCollectionName);
    }

    public async Task<List<CompanyProfile>> GetAsync() =>
        await _CompanyProfileCollection.Find(_ => true).ToListAsync();

    public async Task<CompanyProfile?> GetAsync(string symbol) =>
        await _CompanyProfileCollection.Find(x => x.symbol == symbol).FirstOrDefaultAsync();



    public async Task CreateAsync(CompanyProfile newItem) =>
        await _CompanyProfileCollection.InsertOneAsync(newItem);


    public async Task UpdateAsync(string id, CompanyProfile updatedItem) =>
        await _CompanyProfileCollection.ReplaceOneAsync(x => x._id == id, updatedItem);

    public async Task<List<CompanyProfile>> FindMultipleAsync(FilterDefinition<CompanyProfile> filter) =>
        await _CompanyProfileCollection.Find(filter).ToListAsync();



}