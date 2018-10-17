import ReactionStore from '../ReactionsStore'



//Need to run this with the expected test data. 
it('It can return a list', () => {
  let list = ReactionStore.getAll();
  //console.log(list);
  expect(list[0]).toBeTruthy();
});

it('has the expected first item', ()=>{
  let list = ReactionStore.getAll();
  let firstItem = list[0];
  expect(firstItem).toEqual({id: 0, question: "Which dressing is tastier?", 
  answer1: "Ranch", answer2: "Vinaigrette"});
});

it('has the expected item at id= 1',()=>{
  let item = ReactionStore.getOne(1);
  expect(item).toEqual({id: 1, question: "Which has the better mane?", 
  answer1: "Lion", answer2: "Horse", 
  imageUrl:"/assets/lion.png"});
});

it("doesn't blow up when you get a bad value (returns undefined)",()=>{
  let badValue = ReactionStore.getOne(42);
  expect(badValue).toBeFalsy();
  expect(badValue).toBeUndefined();
});