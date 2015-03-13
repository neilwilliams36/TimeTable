/** @jsx React.DOM */
var React = require('react');
var CONSTANTS = require('../constants/Constants');

var TableCellWeeklyDate = React.createClass({
    render: function (){
        var date = this.props.content;
        var today = date.getDate() +'-'+CONSTANTS.MONTHS[date.getMonth()]+'-'+date.getFullYear();
        return(
            <td className='center noColour'>
            {today}
            </td>
        );
    }
});

module.exports = TableCellWeeklyDate;
