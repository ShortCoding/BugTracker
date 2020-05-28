using System;
using System.Collections.Generic;

namespace Bugtracker.Core.Models
{
    public class Calendar : BaseEntity
    {
        public IEnumerable<Event> Events { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; } 
    }
}