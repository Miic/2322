import React from 'react';
import Reaction from './Reaction';

export default React.createClass({

    render: function () {
        return <div>
            <Reaction question="Which is the better Apex predator?" answer1="Lion" answer2="Human" imageUrl="/assets/lion.png" />
            <Reaction question="Which is faster?" answer1="Cheetah" answer2="Ostrich" imageUrl="/assets/cheetah.png" />
        </div>;
    }

});