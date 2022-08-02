using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class AuthenticationResponse
    {
        //[Required]
        [Display(Name = "Username")]
        public string Username { get; set; }

        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
