using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class AuthenticationRequest
    {
        [Display(Name = "Id")]
        public int PK_CustomerID { get; set; }

        [Display(Name = "Username")]
        public string Username { get; set; }

    }
}
