using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using net_finance.Models;
using NetFinance.Services;




namespace net_finance.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonthlyHistoricDataController : ControllerBase
    {


        public IConfiguration _configuration;
        private readonly MonthlyHistoricDataService _MonthlyHistoricDataService;


        public MonthlyHistoricDataController(IConfiguration config, MonthlyHistoricDataService MonthlyHistoricDataService)
        {
            _configuration = config;
            _MonthlyHistoricDataService = MonthlyHistoricDataService;


        }



        // GET: api/MonthlyHistoricData
        [HttpGet]
        public async Task<List<MonthlyHistoricData>> Get() =>
        await _MonthlyHistoricDataService.GetAsync();


        // GET: api/MonthlyHistoricData/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/MonthlyHistoricData
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MonthlyHistoricData/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/MonthlyHistoricData/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
