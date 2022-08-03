using Dapper;
using StockPortProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;


namespace StockPortProject.DAO
{
    public class AuthenticationDao
    {
       
        private readonly DapperContext _context;

        public AuthenticationDao(DapperContext context)
        {
            _context = context;
        }

        public async Task<AuthenticationResponse> UserAuthentication(AuthenticationResponse loginInfo)
        {
            var query = $"SELECT PK_CustomerID, [Username], Password FROM Customer WHERE [Username] = '{loginInfo.Username}'";

            using (var connection = _context.CreateConnection())
            {
                var customer = await connection.QueryFirstOrDefaultAsync<AuthenticationResponse>(query);
                
                return customer;
            }
        }
    }
}
