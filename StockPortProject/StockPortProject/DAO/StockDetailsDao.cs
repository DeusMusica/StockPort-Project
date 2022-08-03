using Dapper;
using StockPortProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace StockPortProject.DAO
{
    public class StockDetailsDao
    {
        private readonly DapperContext _context;

        public StockDetailsDao(DapperContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<StockDetailsResponse>> GetStocks()
        {
            var query = $"Select StockExchangeName, Symbol, StockClose From StockView";

            using (var connection = _context.CreateConnection())
            {
                var stock = await connection.QueryAsync<StockDetailsResponse>(query);
                return stock.ToList();
            }
        }
    }
}
