
// Lab.Server/Controllers/PatientsController.cs
using Lab.Server.Data;
using Lab.Server.Dtos;
using Lab.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace grocery.Server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PatientsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Patient>> CreatePatient(PatientCreateDto dto)
        {
            var patient = new Patient
            {
                LastName = dto.LastName,
                FullName = dto.LastName, // TODO: replace once you split first/last name fields
                Gender = dto.Gender,
                DOB = dto.Dob,
                MobileNo = dto.MobileNo,
                WhatsAppNo = dto.WhatsAppNo,
                Email = dto.Email,
                Village = dto.Village,
                City = dto.City,
                Country = dto.Country,
                Address = dto.Address,
                CNIC = dto.Cnic,
                PassportNo = dto.PassportNo,
                BarcodeNo = dto.BarcodeNo,
                BloodGroup = dto.BloodGroup,
                Description = dto.Description,
            };

            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPatient), new { id = patient.Id }, patient);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null) return NotFound();
            return patient;
        }
    }

}
