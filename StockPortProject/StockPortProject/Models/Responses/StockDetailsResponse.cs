using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class StockDetailsResponse
    {
        [Display(Name = "Stock Exhange Name")]
        public string StockExchangeName { get; set; }

        [Display(Name = "Stock Symbol")]
        public string Symbol { get; set; }

        [Display(Name = "Stock Value")]
        public decimal StockClose { get; set; }
    }
}
