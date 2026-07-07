namespace Lab.Server.Models
{
    public class Physician
    {
        public int PhysicianId { get; set; }   // Primary Key
        public string Name { get; set; }       // Physician Name
        public string Phone { get; set; }      // Contact Number
        public bool IsActive { get; set; }     // Active Status
    }
}
