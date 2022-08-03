using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockPortProject.DAO;
using StockPortProject.Models;

namespace StockPortProject.Controllers
{
    [ApiController]
    public class StockDetailsController : ControllerBase
    {
        private readonly StockDetailsDao _StockDetailDao;

        public StockDetailsController(StockDetailsDao stockDetailsDao)
        {
            _StockDetailDao = stockDetailsDao;
        }

        [HttpGet]
        [Route("stocks/")]
        public async Task<IActionResult> GetStocks()
        {
            try
            {
                var stocks = await _StockDetailDao.GetStocks();
                if (stocks.Count() == 0)
                {
                    return StatusCode(404);
                }
                return Ok(stocks);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
