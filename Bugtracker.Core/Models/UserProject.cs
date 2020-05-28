using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace Bugtracker.Core.Models
{
    public class UserProject : BaseEntity
    {
        public Guid UserId { get; set; }
        public Guid ProjectId { get; set; }
        public virtual User User{ get; set; }
        public virtual Project Project { get; set; }
    }
}