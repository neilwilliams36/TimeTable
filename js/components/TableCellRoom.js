/** @jsx React.DOM */
var React = require('react');

var TableCellRoom = React.createClass({
    render: function (){
        var classes = 'center ';
        if(this.props.course){
            classes += this.props.course;
        }else{
            classes += 'noColour';
        }

        return(
            <td className={classes}>{this.props.room}
                <br/> {this.props.unit}
                <br/> {this.props.person}</td>
        );
    }
});

module.exports = TableCellRoom;
