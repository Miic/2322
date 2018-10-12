import React from 'react';

class Reaction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer1Count:0,
            answer2Count: 0
        }
        this.incrementAnswer2 = this.incrementAnswer2.bind(this);
    }

    incrementAnswer1 = () => {
        let answer1Count = this.state.answer1Count;
        this.setState({
            answer1Count: answer1Count + 1
        });
    };

    incrementAnswer2() {
        let answer2Count = this.state.answer2Count;
        this.setState({
            answer2Count: answer2Count + 1
        });
    }

    render() {
        return <div style={{padding: 5, border: "1px black solid", margin: 10, width: 256, float: 'left'}}>
            <img src={this.props.imageUrl} />
            <h3>{this.props.question}</h3>
            <button onClick={this.incrementAnswer1}>{this.props.answer1} {this.state.answer1Count}</button>
            <button onClick={this.incrementAnswer2}>{this.props.answer2} {this.state.answer2Count}</button>
        </div>;
    }
}

Reaction.defaultProps = {
    question: "What is the answer to life, the universe and everything?",
    answer1: "42",
    answer2: "NaN",
    imageUrl: "/assets/default-image.png"
};

Reaction.propTypes = {
    question: React.PropTypes.string,
    answer1: React.PropTypes.any,
    answer2: React.PropTypes.any,
    imageUrl: React.PropTypes.string
};

export default Reaction;