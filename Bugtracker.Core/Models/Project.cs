using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bugtracker.Core.Models
{
    public class Project : BaseEntity
    {
        public String Name { get; set; }
        public Kanban Kanban { get; set; }
        public IEnumerable<Bug> Bugs { get; set; }
        public IEnumerable<UserProject> Members { get; set; }
        public User CreatedBy { get; set; }
    }
}