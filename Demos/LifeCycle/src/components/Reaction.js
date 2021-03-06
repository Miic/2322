import React from 'react';

export default React.createClass({
    componentDidMount: function () {
        debugger;
        if (this.props.reactionSeconds > 0) {
            this.interval = window.setInterval(this.tick, 100);
            this.setState({remainingMilliseconds: this.props.reactionSeconds * 1000});
        }
    },
    tick: function () {
        if (this.state.remainingMilliseconds > 0) {
            this.setState({remainingMilliseconds: this.state.remainingMilliseconds - 100});
        } else {
            window.clearInterval(this.interval);
            this.setState({isActive: false});
        }
    },
    componentWillUnmount: function () {
        debugger;
        if (this.interval) {
            window.clearInterval(this.interval);
        }
    },
    getDefaultProps: function () {
        debugger;
        return {
            question: "What is the answer to life, the universe and everything?",
            answer1: "42",
            answer2: "NaN",
            imageUrl: "/assets/default-image.png",
            reactionSeconds: 0
        };
    },
    getInitialState: function () {
        debugger;
        return {
            answer1Count: 0,
            answer2Count: 0,
            isActive: true
        };
    },
    incrementAnswer1: function () {
        var currentAnswer1Count = this.state.answer1Count;
        this.setState({answer1Count: currentAnswer1Count + 1});
    },
    incrementAnswer2: function () {
        var currentAnswer2Count = this.state.answer2Count;
        this.setState({answer2Count: currentAnswer2Count + 1});
    },
    propTypes: {
        question: React.PropTypes.string,
        answer1: React.PropTypes.any,
        answer2: React.PropTypes.any,
        imageUrl: React.PropTypes.string,
        reactionSeconds: React.PropTypes.number
    },
    render: function () {
        debugger;
        return <div style={{padding: 5, border: "1px black solid", margin: 10, width: 256, float: 'left'}}>
            <img src={this.props.imageUrl}/>
            {(() => {
                if (this.props.reactionSeconds > 0 && this.state.remainingMilliseconds > 0) {
                    return <div>
                        Time remaining: {this.state.remainingMilliseconds / 1000}s
                    </div>;
                }
                return;
            })()}

            <h3>{this.props.question}</h3>
            <button disabled={!this.state.isActive} onClick={this.incrementAnswer1}>{this.props.answer1} [{this.state.answer1Count}]
                [{Math.round(100 * this.state.answer1Count / ( this.state.answer1Count + this.state.answer2Count))}]%
            </button>
            <button disabled={!this.state.isActive} onClick={this.incrementAnswer2}>{this.props.answer2} [{this.state.answer2Count}]
                [{Math.round(100 * this.state.answer2Count / ( this.state.answer1Count + this.state.answer2Count))}]%
            </button>
        </div>;
    }

});