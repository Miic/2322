import React from 'react'
import Reaction from './Reaction'

export default class ReactionContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            question: "", 
            answer1: "", 
            answer2: "", 
            imageUrl: "",
            reactionList:[
                {id: 0, question: "Which dressing is tastier?", 
                    answer1: "Ranch", answer2: "Vinaigrette"},
                {id: 1, question: "Which has the better mane?", 
                    answer1: "Lion", answer2: "Horse", imageUrl:"/assets/lion.png"},
                {id: 2, question: "Which is faster?", 
                    answer1: "Cheetah", answer2: "Car", imageUrl:"/assets/cheetah.png"},
                {id: 3, question: "Which bird has the heavier legs?", 
                    answer1: "Turkey", answer2: "Ostrich", imageUrl:"/assets/ostrich.png"} ]
        };
    }

    render(){

        return(
        <div className="container">
            <div className="row">
            {
                this.state.reactionList.map(aReaction=>
                    <Reaction {...aReaction} key={aReaction.id}/>)
            }
            <form className="col-lg-3 col-sm-6 border"
                onSubmit={this.onAddReaction}>
                <div class="form-group">
                    <label for="question">Question:</label>
                    <input type="text" class="form-control" 
                    id="question" value={this.state.question}
                    onChange={e=>this.setState({question: e.target.value})}/> 
                </div>
                <div class="form-group">
                    <label for="answer1">Answer 1:</label>
                    <input type="text" class="form-control" 
                    id="answer1" value={this.state.answer1}
                    onChange={e=>this.setState({answer1: e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="answer2">Answer 2:</label>
                    <input type="text" class="form-control" 
                    id="answer2" value={this.state.answer2}
                    onChange={e=>this.setState({answer2: e.target.value})}/>
                </div>
                <div class="form-group">
                    <label for="imageUrl">Image URL:</label>
                    <input type="text" class="form-control" 
                    id="imageUrl" value={this.state.imageUrl}
                    onChange={e=>this.setState({imageUrl: e.target.value})}/>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
            </div>
  
        </div>
        );
    }

    onAddReaction =  (e) => {
        e.preventDefault();
        var list = this.state.reactionList;
        var reactionToAdd = {
          id: (new Date()).getTime(),
          question: this.state.question,
          answer1: this.state.answer1,
          answer2: this.state.answer2,
          imageUrl: this.state.imageUrl
        };
        list.push(reactionToAdd);
        this.setState({
           reactionList: list 
        });
    }
}