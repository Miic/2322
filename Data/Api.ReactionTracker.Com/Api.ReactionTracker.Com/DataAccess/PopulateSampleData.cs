using Api.ReactionTracker.Com.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Api.ReactionTracker.Com.DataAccess
{
    public class PopulateSampleData : DropCreateDatabaseAlways<ReactionTrackerContext>
    {
        protected override void Seed(ReactionTrackerContext context)
        {
            Vote[] votes =
            {
                new Vote { Name = "AA" },
                new Vote { Name = "BB" },
                new Vote { Name = "CC" },
                new Vote { Name = "DD" },
                new Vote { Name = "EE" },
                new Vote { Name = "FF" },
                new Vote { Name = "GG" },

            };
            context.Votes.AddRange(votes);
            context.SaveChanges();

            Reaction[] questions =
            {
                new Reaction { Question = "Which flower is more like Audrey2?", Answer1 = "Agapanthas", Answer2 = "Protea", ImageUrl = "http://api.reactiontracker.com/assets/protea.png", Answer1Votes = new List<Vote>() { votes[0] } },
                new Reaction { Question = "Which flightless bird do you prefer?", Answer1 = "Ostrich", Answer2 = "Emu", ImageUrl = "http://api.reactiontracker.com/assets/ostrich.png", Answer2Votes = new List<Vote>() { votes[1] } },
                new Reaction { Question = "Which big cat is better?", Answer1 = "Lion", Answer2 = "Cheetah", ImageUrl = "http://api.reactiontracker.com/assets/cheetah.png", Answer1Votes = new List<Vote>() { votes[2] } }
            };


            context.Reactions.AddRange(questions);
            context.SaveChanges();

        }
    }
}