import React from 'react';

export default React.createClass({

    render: function () {
        return <div>
            <img src={this.props.imageUrl} />
            <h3>{this.props.question}</h3>
            <button>{this.props.answer1}</button>
            <button>{this.props.answer2}</button>
        </div>;
    }

});