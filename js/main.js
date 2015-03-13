/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var About = require('./components/About');
var Week = require('./components/TableWeekly');
var All = require('./components/All');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <span className="heading">Timetable App &#160;</span>
                <ul className="nav navbar-left">
                    <li> <Link to='about'>About</Link> </li>
                    <li> <Link to='week'>Week</Link> </li>
                    <li> <Link to='all'>All</Link> </li>
                </ul>
                </nav>
                <RouteHandler/>
            </div>
        );
    }
});

var routes = (
    <Route name = 'app' path = '/' handler = {App}>
        <Route name = 'about' handler= {About} />
        <Route name = 'week' handler = {Week} />
        <Route name = 'all' handler = {All} />
        <DefaultRoute handler={All}/>
    </Route>
);

Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById('main'));
});

