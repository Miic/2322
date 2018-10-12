using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Api.ReactionTracker.Com.Models
{
    public class Vote
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }

        [ForeignKey("Reaction")]
        public int? ReactionId { get; set; }

        public virtual Reaction Reaction { get; set; }
    }
}