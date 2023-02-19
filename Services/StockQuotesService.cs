using net_finance.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;



namespace NetFinance.Services;

public class StockQuotesService
{
    private readonly IMongoCollection<StockQuotes> _StockQuotesCollection;


    public StockQuotesService(
        IOptions<NetFinanceDatabaseSettings> netFinanceDatabaseSettings)
    {
        System.Diagnostics.Debug.WriteLine(netFinanceDatabaseSettings);

        var mongoClient = new MongoClient(
            netFinanceDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            netFinanceDatabaseSettings.Value.DatabaseName);

        _StockQuotesCollection = mongoDatabase.GetCollection<StockQuotes>(
            netFinanceDatabaseSettings.Value.StockQuotesCollectionName);
    } 
     
    public async Task<List<StockQuotes>> GetAsync() =>
        await _StockQuotesCollection.Find(_ => true).ToListAsync();

    public async Task<StockQuotes?> GetAsync(string symbol) =>
        await _StockQuotesCollection.Find(x => x.symbol == symbol).FirstOrDefaultAsync();



    public async Task CreateAsync(StockQuotes newItem) =>
        await _StockQuotesCollection.InsertOneAsync(newItem);


    public async Task UpdateAsync(string id, StockQuotes updatedItem) =>
        await _StockQuotesCollection.ReplaceOneAsync(x => x._id == id, updatedItem);

    public async Task<List<StockQuotes>> FindMultipleAsync(FilterDefinition<StockQuotes> filter) =>
        await _StockQuotesCollection.Find(filter).ToListAsync();



}