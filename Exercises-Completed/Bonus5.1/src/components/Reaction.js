import React from 'react';

export default React.createClass({

    render: function () {
        let { question, answer1, answer2, imageUrl } = this.props;
        return <div>
            <img src={imageUrl} />
            <h3>{question}</h3>
            <button>{answer1}</button>
            <button>{answer2}</button>
        </div>;
    }

});