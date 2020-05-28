using System;
using System.ComponentModel.DataAnnotations;

namespace Bugtracker.Core.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
    }
}