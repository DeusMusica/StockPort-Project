using System.ComponentModel.DataAnnotations;

namespace StockPortProject.Models
{
    public class CustomerResponse
    {
        //[Key]
        [Display(Name = "Id")]
        public int PK_CustomerID { get; set; }

        //[Required]
        [Display(Name = "First Name")]
        public string? Fname { get; set; }

        //[Required]
        [Display(Name = "Last Name")]
        public string? Lname { get; set; }

        //[Required]
        [Display(Name = "Address")]
        public string? Address { get; set; }

        //[Required]
        [Display(Name = "Phone")]
        public string? Phone { get; set; }

        //[Required]
        [Display(Name = "Email")]
        public string? Email { get; set; }

        //[Required]
        [Display(Name = "Username")]
        public string? Username { get; set; }

        //[Required]
        [Display(Name = "Current Cash")]
        public decimal CurrentCash { get; set; }


    }
}
