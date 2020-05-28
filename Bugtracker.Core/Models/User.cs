using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace Bugtracker.Core.Models
{
    public class User : BaseEntity
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String Role { get; set; }
        public String Email { get; set; }
        public String Username { get; set; }
        public String Password { get; set; }
        public Calendar Calendar { get; set; }
        public IEnumerable<Bug> AssignedBugs { get; set; }
        public IEnumerable<Bug> ReportedBugs { get; set; }
        public IEnumerable<UserProject> Projects { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
        public IEnumerable<Task> Tasks { get; set; }
    }
}