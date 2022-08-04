using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockPortProject.DAO;
using StockPortProject.Models;

namespace StockPortProject.Controllers
{
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerDao _CustomerDao;

        public CustomerController(CustomerDao customerDao)
        {
            _CustomerDao = customerDao;
        }

        [HttpGet]
        [Route("customers/search")]
        public async Task<IActionResult> GetCustomer([FromQuery] CustomerRequest customerParams)
        {
            try
            {
                var customers = await _CustomerDao.GetCustomers(customerParams);
                if (customers.Count() == 0)
                {
                    return StatusCode(404);
                }
                return Ok(customers);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet]
        [Route("customers/{id}")]
        public async Task<IActionResult> GetCustomerById([FromRoute] int id)
        {
            try
            {
                var customer = await _CustomerDao.GetCustomerById(id);
                if (customer == null)
                {
                    return StatusCode(404);
                }
                return Ok(customer);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpPost]
        [Route("customers")]
        public async Task<IActionResult> CreateCustomer([FromBody] CustomerRequest insertRequest)
        {
            try
            {
                await _CustomerDao.CreateCustomer(insertRequest);
                return StatusCode(201);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
