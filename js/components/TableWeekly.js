/** @jsx React.DOM */
var React = require('react');
var TableCellWeeklyDate = require('../components/TableCellWeeklyDate');
var TableCellWeeklyDay = require('../components/TableCellWeeklyDay');
var TableCellRoom = require('../components/TableCellRoom');
var DropDown = require('../components/DropDownWeekly');


var MainStore = require('../stores/Mainstore');
var Actions = require('../actions/Actions');

function getData(){
    return {
        week: MainStore.getMainData(),
        people: MainStore.getPeople(),
        person: MainStore.getPerson()
    };
}
var TableWeekly =
    React.createClass({
        getInitialState: function(){
            return getData();
        },
        componentWillMount: function(){
            MainStore.addChangeListener(this._onChange);
        },
        componentDidMount: function(){
            Actions.getData();
        },
        _onChange: function(){
            this.setState(getData());
        },
        render:function(){
            var currentPerson = this.state.person;
            if (currentPerson === 'All'){
                currentPerson += " lecturers'"
            }else{
                currentPerson += "'s";
            }
            var rowNode = this.state.week.map(function(info, key){
                if(info.date.getDay()<5){
                    return(
                        <tr key={key}>
                            <TableCellWeeklyDate content={info.date} />
                            <TableCellWeeklyDay content={info.date} />
                            <TableCellRoom course={info.content[0].course}
                                room={info.content[0].room}
                                unit={info.content[0].unit}
                                person={info.content[0].person}/>
                            <TableCellRoom course={info.content[1].course}
                                room={info.content[1].room}
                                unit={info.content[1].unit}
                                person={info.content[1].person}/>
                            <TableCellRoom course={info.content[2].course}
                                room={info.content[2].room}
                                unit={info.content[2].unit}
                                person={info.content[2].person}/>
                            <TableCellRoom course={info.content[3].course}
                                room={info.content[3].room}
                                unit={info.content[3].unit}
                                person={info.content[3].person}/>
                            <TableCellRoom course={info.content[4].course}
                                room={info.content[4].room}
                                unit={info.content[4].unit}
                                person={info.content[4].person}/>
                            <TableCellRoom course={info.content[5].course}
                                room={info.content[5].room}
                                unit={info.content[5].unit}
                                person={info.content[5].person}/>
                        </tr>
                    );
                } else{
                    return(
                        [<tr key={key}>
                            <TableCellWeeklyDate content={info.date} />
                            <TableCellWeeklyDay content={info.date} />
                            <TableCellRoom course={info.content[0].course}
                                room={info.content[0].room}
                                unit={info.content[0].unit}
                                person={info.content[0].person}/>
                            <TableCellRoom course={info.content[1].course}
                                room={info.content[1].room}
                                unit={info.content[1].unit}
                                person={info.content[1].person}/>
                            <TableCellRoom course={info.content[2].course}
                                room={info.content[2].room}
                                unit={info.content[2].unit}
                                person={info.content[2].person}/>
                            <TableCellRoom course={info.content[3].course}
                                room={info.content[3].room}
                                unit={info.content[3].unit}
                                person={info.content[3].person}/>
                            <TableCellRoom course={info.content[4].course}
                                room={info.content[4].room}
                                unit={info.content[4].unit}
                                person={info.content[4].person}/>
                            <TableCellRoom course={info.content[5].course}
                                room={info.content[5].room}
                                unit={info.content[5].unit}
                                person={info.content[5].person}/>
                        </tr>,
                            <tr ><td className='noborder'>Weekend</td></tr>
                        ]
                    );
                }

            });
            return(
                <div className='displayTable'>
                <p><DropDown content={this.state.people}/> The table is currently showing {currentPerson} classes.</p>
                <table>
                    <thead>
                        <th width='10%' className='center'>Date</th>
                        <th width='10%' className='center'>Day</th>
                        <th width='10%' className='center'>Morning</th>
                        <th width='10%' className='center'>Afternoon</th>
                        <th width='10%' className='center'>Evening</th>
                        <th width='10%' className='center'>Morning</th>
                        <th width='10%' className='center'>Afternoon</th>
                        <th width='10%' className='center'>Evening</th>
                    </thead>
                    <tbody>
                    {rowNode}
                    </tbody>
                </table>
                    </div>
            );
        }
    });

module.exports = TableWeekly;

