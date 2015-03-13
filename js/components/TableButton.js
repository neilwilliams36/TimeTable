/** @jsx React.DOM */

var React = require('react');
var Actions = require('../actions/Actions');

var TableButton = React.createClass({
    handleClick: function(){
        Actions.changeData(this.props.index)
    },
    render: function (){
        return(
            <button onClick={this.handleClick}>Change</button>
        );
    }
});

module.exports = TableButton;
