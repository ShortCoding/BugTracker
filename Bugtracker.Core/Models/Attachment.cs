using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bugtracker.Core.Models
{
    public class Attachment : BaseEntity
    {
        public String Name { get; set; }
        public byte[] File { get; set; }
        public Bug Bug { get; set; }
    }
}