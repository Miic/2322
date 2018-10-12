using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Api.ReactionTracker.Com.Models
{
    public class Reaction
    {
        public Reaction()
        {
            Answer1Votes = new List<Vote>();
            Answer2Votes = new List<Vote>();
        }

        [Key]
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer1 { get; set; }
        public string Answer2 { get; set; }
        public string ImageUrl { get; set; }

        public virtual List<Vote> Answer1Votes { get; set; }
        public virtual List<Vote> Answer2Votes { get; set; }
    }
}