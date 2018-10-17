import React from 'react'
import Reaction from './Reaction'
import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';
import NewReactionForm from './NewReactionForm';

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
            <NewReactionForm />
            </div>
  
        </div>
        );
    }

   
}