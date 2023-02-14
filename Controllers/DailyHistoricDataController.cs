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
    public class DailyHistoricDataController : ControllerBase
    {


        public IConfiguration _configuration;
        private readonly DailyHistoricDataService _DailyHistoricDataService;


        public DailyHistoricDataController(IConfiguration config, DailyHistoricDataService DailyHistoricDataService)
        {
            _configuration = config;
            _DailyHistoricDataService = DailyHistoricDataService;


        }





        //GET: api/DailyHistoricData/multiple/SPY,QQQ,DIA
        [HttpGet("multiple/{symbolList}")]
        public async Task<IActionResult> GetMultiple(string symbolList)
        {
           string[] symbolArray = symbolList.Split(',');
            Console.WriteLine(symbolArray);
            var filter = Builders<DailyHistoricData>.Filter.In(x => x.symbol, symbolArray);
            List<DailyHistoricData> results = await _DailyHistoricDataService.FindMultipleAsync(filter);
            return Ok(results);
        }



        // GET: api/DailyHistoricData
        [HttpGet]
        public async Task<List<DailyHistoricData>> Get() =>
            await _DailyHistoricDataService.GetAsync();

        // POST: api/DailyHistoricData
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/DailyHistoricData/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/DailyHistoricData/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
