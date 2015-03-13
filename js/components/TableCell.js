/** @jsx React.DOM */


var React = require('react');

var TableCell = React.createClass({
    render: function (){
        return(
            <td className={this.props.colour}>{this.props.content}</td>
        );
    }
});

module.exports = TableCell;
