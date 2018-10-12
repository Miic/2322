using Api.ReactionTracker.Com.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Api.ReactionTracker.Com.DataAccess
{
    public class ReactionTrackerContext : DbContext
    {
        public ReactionTrackerContext()
        {
            Database.SetInitializer<ReactionTrackerContext>(new PopulateSampleData());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Reaction> Reactions { get; set; }
        public DbSet<Vote> Votes { get; set; }
    }
}