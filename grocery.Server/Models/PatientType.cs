namespace Grocery.Server.Models
{
    public class PatientType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }

        public ICollection<Patient> Patients { get; set; }
    }
}