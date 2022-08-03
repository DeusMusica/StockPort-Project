﻿using Dapper;
using StockPortProject.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace StockPortProject.DAO
{
    public class PortfolioDao
    {
        private readonly DapperContext _context;

        public PortfolioDao(DapperContext context)
        {
            _context = context;
        }

        public async Task CreatePortfolio (PortfolioRequest insertRequest)
        {
            var query = $"INSERT INTO Portfolio (FK_CUstomerID, Name, TotalStock, TotalStockValue) VALUES" +
                        $"('{insertRequest.FK_CustomerID}', '{insertRequest.Name}', '{insertRequest.TotalStock}', '{insertRequest.TotalStockValue}')";


            using (var connection = _context.CreateConnection())
            {
                await connection.ExecuteAsync(query);
            }
        }
    }
}
