/** @jsx React.DOM */
var React = require('react');
var CONSTANTS = require('../constants/Constants');

var TableCellWeeklyDay = React.createClass({
    render: function (){
        var date = this.props.content;
        var day = CONSTANTS.DAYS[date.getDay()];
        return(
            <td className='center noColour'>
            {day}
            </td>
        );
    }
});

module.exports = TableCellWeeklyDay;