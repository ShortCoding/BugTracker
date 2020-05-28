using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Bugtracker.Core.Models
{
    public class Bug : BaseEntity
    {
        public String Title { get; set; }
        public String Content { get; set; }
        public bool IsProducible { get; set; }
        public String Status { get; set; }
        public String Severity { get; set; }
        
        public Guid? ReporterId { get; set; }
        public User Reporter { get; set; }
        
        public Guid? AssignedId { get; set; }
        public User Assigned { get; set; }
        
        public Guid ProjectId { get; set; }
        public Project Project { get; set; }
        
        public IEnumerable<Attachment> Attachments { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
    } 
}