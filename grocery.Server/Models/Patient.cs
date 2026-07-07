using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Grocery.Server.Models
{
    public class Patient
    {
        public int Id { get; set; }

        public string? MRNo { get; set; }

        public string? Title { get; set; }

        public string? MaritalStatus { get; set; }

        public string? FatherName { get; set; }

        public string? HusbandName { get; set; }

        public string? FirstName { get; set; }

        [Required]
        public string LastName { get; set; } = null!;

        [Required]
        public string FullName { get; set; } = null!;

        [Required]
        public string Gender { get; set; } = null!;

        public DateTime? DOB { get; set; }

        [Required]
        public string MobileNo { get; set; } = null!;

        public string? Email { get; set; }
        public string? WhatsAppNo { get; set; }
        public string? Village { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? Address { get; set; }
        public string? CNIC { get; set; }
        public string? PassportNo { get; set; }
        public string? BarcodeNo { get; set; }
        public string? BloodGroup { get; set; }

        public int? PatientTypeId { get; set; }

        public bool ActiveStatus { get; set; } = true;

        public string? Description { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime? UpdatedAt { get; set; }

        [ForeignKey("PatientTypeId")]
        public PatientType? PatientType { get; set; }
    }
}