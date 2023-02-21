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
    public class CompanyProfileController : ControllerBase
    {


        public IConfiguration _configuration;
        private readonly CompanyProfileService _CompanyProfileService;


        public CompanyProfileController(IConfiguration config, CompanyProfileService CompanyProfileService)
        {
            _configuration = config;
            _CompanyProfileService = CompanyProfileService;


        }





        //GET: api/CompanyProfile/multiple/SPY,QQQ,DIA
        //[HttpGet("multiple/{symbolList}")]
        //public async Task<IActionResult> GetMultiple(string symbolList)
        //{
        //    string[] symbolArray = symbolList.Split(',');
        //    Console.WriteLine(symbolArray);
        //    var filter = Builders<CompanyProfile>.Filter.In(x => x.symbol, symbolArray);
        //    List<CompanyProfile> results = await _CompanyProfileService.FindMultipleAsync(filter);
        //    return Ok(results);
        //}



        // GET: api/CompanyProfile
        [HttpGet]
        public async Task<List<CompanyProfile>> Get() =>
            await _CompanyProfileService.GetAsync();



        //GET: api/CompanyProfile/:symbol
        [HttpGet("{symbol}")]
        public async Task<CompanyProfile?> GetBySymbol(string symbol) =>
            await _CompanyProfileService.GetAsync(symbol);


        // POST: api/CompanyProfile
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/CompanyProfile/symbol
        [HttpPut("{symbol}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/CompanyProfile/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
