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

        public async Task<IEnumerable<CustomerResponse>> GetCustomers(CustomerRequest querycustomer)
        {
            var query = $"SELECT PK_CustomerID, Fname, Lname, Address, Phone, Email, Username, CurrentCash FROM Customer WHERE 1= 1 ";

            if (!string.IsNullOrEmpty(querycustomer.Fname))
            {
                query += "AND Fname = @Fname ";
            }
            if (!string.IsNullOrEmpty(querycustomer.Lname))
            {
                query += "AND Lname = @Lname ";
            }
            if (!string.IsNullOrEmpty(querycustomer.Address))
            {
                query += "AND Address = @Address ";
            }
            if (!string.IsNullOrEmpty(querycustomer.Phone))
            {
                query += "AND Phone = @Phone ";
            }
            if (!string.IsNullOrEmpty(querycustomer.Email))
            {
                query += "AND Email = @Email ";
            }
            if (!string.IsNullOrEmpty(querycustomer.Username))
            {
                query += "AND Username = @Username ";
            }

            var parameters = new DynamicParameters();
            parameters.Add("Fname", querycustomer.Fname, DbType.String);
            parameters.Add("Lname", querycustomer.Lname, DbType.String);
            parameters.Add("Address", querycustomer.Address, DbType.String);
            parameters.Add("Phone", querycustomer.Phone, DbType.String);
            parameters.Add("Email", querycustomer.Email, DbType.String);
            parameters.Add("Username", querycustomer.Username, DbType.String);

            using (var connection = _context.CreateConnection())
            {
                var customers = await connection.QueryAsync<CustomerResponse>(query, parameters);
                return customers.ToList();
            }
        }

        public async Task<CustomerResponse> GetCustomerById(int id)
        {
            var query = $"SELECT PK_CustomerID, Fname, Lname, Address, Phone, Email, Username, CurrentCash FROM Customer WHERE PK_CustomerID = {id}";

            using (var connection = _context.CreateConnection())
            {
                var customer = await connection.QueryFirstOrDefaultAsync<CustomerResponse>(query);
                return customer;
            }
        }

        public async Task CreateCustomer(CustomerRequest insertRequest)
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
