using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockPortProject.DAO;
using StockPortProject.Models;

namespace StockPortProject.Controllers
{
    [ApiController]
    public class PortfolioController : ControllerBase
    {
        
        private readonly PortfolioDao _PortfolioDao;

        public PortfolioController(PortfolioDao portfolioDao)
        {
            _PortfolioDao = portfolioDao;
        }

        [HttpPost]
        [Route("portfolio")]
        public async Task<IActionResult> CreatePortfolio([FromBody] PortfolioRequest insertRequest)
        {
            try
            {
                await _PortfolioDao.CreatePortfolio(insertRequest);
                return StatusCode(201);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
