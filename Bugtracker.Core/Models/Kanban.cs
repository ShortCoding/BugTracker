using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bugtracker.Core.Models
{
    public class Kanban : BaseEntity
    {
        public IEnumerable <Task> Tasks { get; set; }
        public Guid ProjectId { get; set; }
        public Project Project { get; set; }
    }
}