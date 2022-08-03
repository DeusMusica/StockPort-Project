using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class AuthenticationResponse
    {
        [Display(Name = "Id")]
        public int PK_CustomerID { get; set; }
        [Required]
        [Display(Name = "Username")]
        public string Username { get; set; }
        [Required]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
