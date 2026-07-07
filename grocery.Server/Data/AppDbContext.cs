using Grocery.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace Grocery.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Physician> Physicians { get; set; }

        // ✅ ADD THESE
        public DbSet<Patient> Patients { get; set; }
        public DbSet<PatientType> PatientTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // 🔧 Patient table configuration (matching your SQL exactly)
            modelBuilder.Entity<Patient>(entity =>
            {
                entity.ToTable("Patients");

                entity.HasKey(e => e.Id);

                entity.Property(e => e.ActiveStatus)
                      .HasDefaultValue(true);

                entity.Property(e => e.CreatedAt)
                      .HasDefaultValueSql("GETDATE()");

                entity.HasOne(e => e.PatientType)
                      .WithMany(p => p.Patients)
                      .HasForeignKey(e => e.PatientTypeId);
            });

            // PatientType table
            modelBuilder.Entity<PatientType>(entity =>
            {
                entity.ToTable("PatientTypes");

                entity.HasKey(e => e.Id);
            });
        }
    }
}