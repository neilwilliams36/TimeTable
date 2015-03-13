var Dispatcher = require('../dispatchers/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');
var CONSTANTS = require('../constants/Constants');
var clone = require('clone');

var _weekData = [];
var _weekDataArchive = [];
var _weekPeople = ['All'];
var _currentPerson = 'All';

//internal functions
_setData = function(newData){
    _weekData = newData.action;
    _weekData.forEach(function(entry){
        entry.date = new Date(entry.date);
        entry.content.forEach(function(e){
            if (_weekPeople.indexOf(e.person) === -1 && e.person !=='' ){
                _weekPeople.push(e.person);
            }
        });
    });
    _weekDataArchive = clone(_weekData);
};

_changeData = function(index){
    _currentPerson = _weekPeople[index-1];
    _weekData = clone(_weekDataArchive);
    if (_currentPerson !=='All'){
        _weekData.forEach(function(entity){
            entity.content.forEach(function(e){
                if(e.person !== _currentPerson){
                    e.person = '';
                    e.course = '';
                    e.unit = '';
                }
            });
        });
    }
};

var MainStore = merge(EventEmitter.prototype,{
    emitChange: function(){
        this.emit(CONSTANTS.CHANGE_EVENT);
    },
    addChangeListener: function(callback){
        this.on(CONSTANTS.CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CONSTANTS.CHANGE_EVENT, callback)
    },
    getMainData : function(){
        return _weekData;
    },
    getPeople: function(){
        return _weekPeople;
    },
    getPerson: function(){
        return _currentPerson;
    },
    dispatcherIndex: Dispatcher.register(function(payload){
        var action = payload.action;
        switch(action.actionType){
            case CONSTANTS.WEEKLY_DROPDOWN:
                _changeData(action.action);
                break;
            case CONSTANTS.GET_DATA:
                //receive the data into the store
                _setData(payload.action);
                break;

        }
        MainStore.emitChange();
        return true;
    })
});

module.exports = MainStore;
