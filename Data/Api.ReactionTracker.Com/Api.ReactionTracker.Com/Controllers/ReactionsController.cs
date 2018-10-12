using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using Api.ReactionTracker.Com.DataAccess;
using Api.ReactionTracker.Com.Models;
using System.Web.Http.Cors;
namespace Api.ReactionTracker.Com.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ReactionsController : ApiController
    {
        private ReactionTrackerContext db = new ReactionTrackerContext();

        // GET: api/Reactions
        public IQueryable GetReactions()
        {
            return db.Reactions.Select(r => new {
                Id = r.Id,
                Question = r.Question,
                Answer1 = r.Answer1,
                Answer2 = r.Answer2,
                ImageUrl = r.ImageUrl,
                Answer1Votes = r.Answer1Votes.Select(v => v.Name),
                Answer2Votes = r.Answer2Votes.Select(v => v.Name)
            });
        }

        // GET: api/Reactions/5
        [ResponseType(typeof(Reaction))]
        public IHttpActionResult GetReaction(int id)
        {
            Reaction reaction = db.Reactions.Find(id);
            if (reaction == null)
            {
                return NotFound();
            }

            return Ok(reaction);
        }

        // PUT: api/Reactions/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutReaction(int id, Reaction reaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reaction.Id)
            {
                return BadRequest();
            }

            db.Entry(reaction).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReactionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Reactions
        [ResponseType(typeof(Reaction))]
        public IHttpActionResult PostReaction(Reaction reaction)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Reactions.Add(reaction);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = reaction.Id }, reaction);
        }

        [Route("reactions/{id}/voteAnswer1/{name}")]
        public IHttpActionResult PostVoteAnswer1(int id, string name)
        {


            var reaction = db.Reactions.Find(id);

            if (reaction == null) return BadRequest("This reaction could not be found");

            if (reaction.Answer1Votes.Find(v => v.Name == name) != null)
            {
                return BadRequest(name + " has already voted for " + reaction.Answer1);
            }

            if (reaction.Answer2Votes.Find(v => v.Name == name) != null)
            {
                return BadRequest(name + " has already voted for " + reaction.Answer2);
            }

            reaction.Answer1Votes.Add(new Vote { Name = name, ReactionId = id });

            db.SaveChanges();

            return Ok("Vote recorded");
        }


        [Route("reactions/{id}/voteAnswer2/{name}")]
        public IHttpActionResult PostVoteAnswer2(int id, string name)
        {


            var reaction = db.Reactions.Find(id);

            if (reaction == null) return BadRequest("This reaction could not be found");

            if (reaction.Answer1Votes.Find(v => v.Name == name) != null)
            {
                return BadRequest(name + " has already voted for " + reaction.Answer1);
            }

            if (reaction.Answer2Votes.Find(v => v.Name == name) != null)
            {
                return BadRequest(name + " has already voted for " + reaction.Answer2);
            }

            reaction.Answer2Votes.Add(new Vote { Name = name, ReactionId = id });

            db.SaveChanges();

            return Ok("Vote recorded");

        }
        

        // DELETE: api/Reactions/5
        [ResponseType(typeof(Reaction))]
        public IHttpActionResult DeleteReaction(int id)
        {
            Reaction reaction = db.Reactions.Find(id);
            if (reaction == null)
            {
                return NotFound();
            }
            var votesToRemove = db.Votes.Where(v => v.ReactionId == id);
            reaction.Answer1Votes.Clear();
            reaction.Answer2Votes.Clear();
            db.Reactions.Remove(reaction);
            db.SaveChanges();

            return Ok(reaction);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ReactionExists(int id)
        {
            return db.Reactions.Count(e => e.Id == id) > 0;
        }
    }
}