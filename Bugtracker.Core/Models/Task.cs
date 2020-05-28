using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bugtracker.Core.Models
{
    public class Task : BaseEntity
    {
        public String Title { get; set; }
        public String Content { get; set; }
        public String Status { get; set; }
        public User Assigned { get; set; }
        public bool IsBlocking { get; set; }
        public bool IsDeleted { get; set; }
    }
}