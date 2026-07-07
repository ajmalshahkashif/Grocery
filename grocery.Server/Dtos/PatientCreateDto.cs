namespace Grocery.Server.Dtos
{
    public class PatientCreateDto
    {
        public string LastName { get; set; } = null!;
        public string Gender { get; set; } = null!;
        public DateTime? Dob { get; set; }
        public string MobileNo { get; set; } = null!;
        public string? WhatsAppNo { get; set; }
        public string? Email { get; set; }
        public string? Village { get; set; }
        public string? City { get; set; }
        public string? Country { get; set; }
        public string? Address { get; set; }
        public string? Cnic { get; set; }
        public string? PassportNo { get; set; }
        public string? BarcodeNo { get; set; }
        public string? BloodGroup { get; set; }
        public string? Description { get; set; }
    }
}

