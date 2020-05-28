using Bugtracker.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Bugtracker.Infrastructure
{
    public class BugtrackerDbContext : DbContext
    {
        
        //Dbsets are the models translated into tables  
        public DbSet<Bug> Bug { get; set; }
        public DbSet<Kanban> Kanban { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Task> Task { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<Comment> Comment { get; set; }
        public DbSet<UserProject> UserProject { get; set; }
        public DbSet<Attachment> Attachment { get; set; }
        public DbSet<Calendar> Calendar { get; set; }
        public DbSet<Event> Event { get; set; }
        
        
        public BugtrackerDbContext(DbContextOptions<BugtrackerDbContext> options) : base(options){  }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>()
                .HasMany(b => b.Bugs)
                .WithOne(c => c.Project)
                .IsRequired();

            modelBuilder.Entity<Bug>()
                .HasMany(b => b.Attachments)
                .WithOne(b => b.Bug)
                .OnDelete(DeleteBehavior.SetNull);
            

            modelBuilder.Entity<Bug>()
                .HasMany(b => b.Comments)
                .WithOne(b => b.Bug)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<User>()
                .HasMany(b => b.AssignedBugs)
                .WithOne(b=> b.Assigned)
                .OnDelete(DeleteBehavior.SetNull);
            
            modelBuilder.Entity<User>()
                .HasMany(b => b.ReportedBugs)
                .WithOne(b=> b.Reporter)
                .OnDelete(DeleteBehavior.NoAction);
            
            modelBuilder.Entity<User>()
                .HasMany(b => b.Comments)
                .WithOne(b=> b.User)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Project>()
                .HasMany(b => b.Bugs)
                .WithOne(b=> b.Project)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Calendar>()
                .HasMany(b => b.Events)
                .WithOne(b=> b.Calendar)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<User>()
                .HasOne(b => b.Calendar)
                .WithOne(b=> b.User)
                .HasForeignKey<Calendar>(b => b.UserId);

            modelBuilder.Entity<User>()
                .HasMany(b => b.Tasks)
                .WithOne(b => b.Assigned)
                .OnDelete(DeleteBehavior.SetNull); 
            
            modelBuilder.Entity<Project>()
                .HasOne(x => x.Kanban)
                .WithOne(x => x.Project)
                .HasForeignKey<Kanban>(x => x.ProjectId);
            
            modelBuilder.Entity<UserProject>()
                .HasKey(bc => new { bc.UserId, bc.ProjectId });  
            
            modelBuilder.Entity<UserProject>()
                .HasOne(bc => bc.Project)
                .WithMany(b => b.Members)
                .HasForeignKey( b => b.ProjectId);
            
            modelBuilder.Entity<UserProject>()
                .HasOne(bc => bc.User)
                .WithMany(c => c.Projects)
                .HasForeignKey( b => b.UserId);

        }

    }
}