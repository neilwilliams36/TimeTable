/** @jsx React.DOM */

var React = require('react');
var MainStore = require('../stores/MainStore');
var Actions = require('../actions/Actions');

function getData(){
    return {items: MainStore.getPeople(),
        selected: 0
    };
}

module.exports = React.createClass({
    getInitialState: function(){
        return {
            items: this.props.content,
            selected: 0
        };
    },
    componentWillMount: function(){
        MainStore.addChangeListener(this._onChange)
    },
    componentDidMount: function(){
        this.setState(getData())
    },
    _onChange: function(){
        this.setState(getData())
    },
    handleClick: function(){
        var value = this.refs.menu.getDOMNode().value;
        Actions.changeWeeklyDropdown(value);
    },
    render: function(){
        var itemslist = ["Please Select an item"];
        this.state.items.forEach(function(item){
            itemslist.push(item);
        });
        var items = itemslist.map(function(item,i){
            return (
                <option key={i} value={i}  >{item} </option>
            )
        }.bind(this));

        return (
            <select ref="menu" value={this.state.selected} onChange={this.handleClick}>
                {items}
            </select>
        )
    }
});
