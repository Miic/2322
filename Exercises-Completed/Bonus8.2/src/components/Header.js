import React from 'react';

import AppActions from '../actions/AppActions';
import ReactionsStore from '../stores/ReactionsStore';

export default React.createClass({
    getInitialState: function () {
      return {
          name: ReactionsStore.getName()
      };
    },
    componentDidMount: function () {
        ReactionsStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        ReactionsStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            name: ReactionsStore.getName()
        });
    },
    onNameChange: function (e) {
        AppActions.setUsername(e.target.value);
    },
    render: function () {
        return <div>This is the Header Username: <input value={this.state.name} onChange={this.onNameChange}/></div>;
    }

});