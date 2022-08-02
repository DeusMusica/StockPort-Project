using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockPortProject.DAO;
using StockPortProject.Models;


namespace StockPortProject.Controllers
{
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
       
        private readonly AuthenticationDao _AuthenticationDao;

        public AuthenticationController(AuthenticationDao authenticationDao)
        {
            _AuthenticationDao = authenticationDao;
        }

        [HttpPost]
        [Route("Authentication/")]
        public async Task<IActionResult> UserAuthentication([FromBody] AuthenticationResponse logininfo)
        {
            try
            {
                var customer = await _AuthenticationDao.UserAuthentication(logininfo);
                
                if (customer.Username == logininfo.Username && customer.Password == logininfo.Password)
                {
                    return Ok(customer.Username);
                }
                else
                {
                    return StatusCode(204);
                }
                
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
