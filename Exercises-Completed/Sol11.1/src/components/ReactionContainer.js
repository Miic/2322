import React from 'react'
import Reaction from './Reaction'
import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';


export default class ReactionContainer extends React.Component{

    constructor(props){
        super(props);
        this.state={
            reactionList: ReactionsStore.getAll()
        };
    }

    onChange = () => {
        this.setState({
           reactionList: ReactionsStore.getAll() 
        });  
      }

      componentDidMount() {
        ReactionsStore.addChangeListener(this.onChange);
      }

      componentWillUnmount() {
        ReactionsStore.removeChangeListener(this.onChange);
      }

    render(){

        return(
        <div className="container">
            <div className="row">
            {
                this.state.reactionList.map(aReaction=>
                    <Reaction {...aReaction} key={aReaction.id}/>)
            }
            </div>
  
        </div>
        );
    }

    onAddReaction =  (e) => {
        e.preventDefault();
        //var list = this.state.reactionList;
        var reactionToAdd = {
          id: (new Date()).getTime(),
          question: this.state.question,
          answer1: this.state.answer1,
          answer2: this.state.answer2,
          imageUrl: this.state.imageUrl
        };
        AppActions.add(reactionToAdd);
        //list.push(reactionToAdd);
        // this.setState({
        //    reactionList: list 
        // });
        this.resetFormProperties();
    }

    resetFormProperties(){
        this.setState({
            question: "", 
            answer1: "", 
            answer2: "", 
            imageUrl: ""
        });
    }
}