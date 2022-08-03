using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class PortfolioRequest
    {
        [Display(Name = "UserID")]
        public int FK_CustomerID { get; set; }

        [Display(Name = "Name")]
        public string? Name { get; set; }

        [Display(Name = "Total Stock Amount")]
        public int TotalStock { get; set; }

        [Display(Name = "Total Stock Value")]
        public decimal TotalStockValue { get; set; }

    }
}
