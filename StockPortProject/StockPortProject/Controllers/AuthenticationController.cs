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
        [Route("authentication/")]
        public async Task<IActionResult> UserAuthentication([FromBody] AuthenticationResponse logininfo)
        {
            try
            {
                var customer = await _AuthenticationDao.UserAuthentication(logininfo);
                if (customer != null)
                {

                    AuthenticationRequest customerreturn = new AuthenticationRequest();
                    if (customer.Username == logininfo.Username && customer.Password == logininfo.Password)
                    {

                        customerreturn.PK_CustomerID = customer.PK_CustomerID;
                        customerreturn.Username = customer.Username;

                    }
                    if (customer.Username != logininfo.Username || customer.Password != logininfo.Password)
                    {
                        return StatusCode(401);
                    }
                    return Ok(customerreturn);
                }
                else
                {
                    return StatusCode(401);
                }

            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
