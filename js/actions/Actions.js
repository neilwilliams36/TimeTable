var CONSTANTS = require('../constants/Constants');
var Dispatcher = require('../dispatchers/Dispatcher');
var Ajax = require('./Ajax');

var Actions = {
    getData: function() {
        Ajax.get('../dist/ajax/weeklydata.php').then(function(data){
            Dispatcher.handleViewAction({
                actionType: CONSTANTS.GET_DATA,
                action: data
            })
        })

    },
    changeWeeklyDropdown: function(index){
        Dispatcher.handleViewAction({
            actionType: CONSTANTS.WEEKLY_DROPDOWN,
            action: index
        })
    }
};

module.exports = Actions;
