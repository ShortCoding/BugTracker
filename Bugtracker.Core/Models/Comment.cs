using System;

namespace Bugtracker.Core.Models
{
    public class Comment : BaseEntity
    {
        public String Content { get; set; }
        public User User { get; set; }
        public Bug Bug { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}