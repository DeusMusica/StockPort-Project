using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class CustomerRequest
    {        
        
        [Display(Name = "Id")]
        public int PK_CustomerID { get; set; }
        
        [Display(Name = "First Name")]
        public string? Fname { get; set; }

        [Display(Name = "Last Name")]
        public string? Lname { get; set; }

        [Display(Name = "Address")]
        public string? Address { get; set; }

        [Display(Name = "Phone")]
        public string? Phone { get; set; }

        [Display(Name = "Email")]
        public string? Email { get; set; }

        [Display(Name = "Username")]
        public string? Username { get; set; }

        [Display(Name = "Password")]
        public string? Password { get; set; }

        [Display(Name = "Current Cash")]
        public decimal CurrentCash { get; set; }

        
    }
}
