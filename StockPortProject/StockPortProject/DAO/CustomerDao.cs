using Dapper;
using StockPortProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
namespace StockPortProject.DAO
{
    public class CustomerDao
    {
        private readonly DapperContext _context;

        public CustomerDao(DapperContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Customer>> GetCustomers(Customer querycustomer)
        {
            var query = $"Select * FROM Customer";
            using (var connection = _context.CreateConnection())
            {
                var customer = await connection.QueryAsync<Customer>(query);
                return customer.ToList();
            }
        }

        public async Task CreateCustomer(Customer insertRequest)
        {


            var query = $"INSERT INTO Customer (Fname, Lname, Address, Phone, Email, Username, Password, CurrentCash) VALUES" +
                        $"('{insertRequest.Fname}', '{insertRequest.Lname}', '{insertRequest.Address}', '{insertRequest.Phone}', '{insertRequest.Email}', '{insertRequest.Username}'," +
                        $"'{insertRequest.Password}', {insertRequest.CurrentCash})";


            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(query);
            }
        }
    }
}
