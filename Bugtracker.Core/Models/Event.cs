using System;

namespace Bugtracker.Core.Models
{
    public class Event : BaseEntity
    {
        public String EventName { get; set; }
        public DateTime EventFrom { get; set; }
        public DateTime EventTo { get; set; }
        
        public Guid CalendarId { get; set; }
        public Calendar Calendar { get; set; }
    }
}