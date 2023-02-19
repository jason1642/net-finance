using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using net_finance.Models;
using NetFinance.Services;
using MongoDB.Driver;



namespace net_finance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockQuotesController : ControllerBase
    {


        public IConfiguration _configuration;
        private readonly StockQuotesService _StockQuotesService;


        public StockQuotesController(IConfiguration config, StockQuotesService StockQuotesService)
        {
            _configuration = config;
            _StockQuotesService = StockQuotesService;


        }





        //GET: api/StockQuotes/multiple/SPY,QQQ,DIA
        //[HttpGet("multiple/{symbolList}")]
        //public async Task<IActionResult> GetMultiple(string symbolList)
        //{
        //    string[] symbolArray = symbolList.Split(',');
        //    Console.WriteLine(symbolArray);
        //    var filter = Builders<StockQuotes>.Filter.In(x => x.symbol, symbolArray);
        //    List<StockQuotes> results = await _StockQuotesService.FindMultipleAsync(filter);
        //    return Ok(results);
        //}



        // GET: api/StockQuotes
        [HttpGet]
        public async Task<List<StockQuotes>> Get() =>
            await _StockQuotesService.GetAsync();

        // POST: api/StockQuotes
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/StockQuotes/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/StockQuotes/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
