import React from 'react';
import ReactDOM from 'react-dom';

var Hello = React.createClass({
	render : function(){
		return <h1>Hello</h1>;
	}
});

ReactDOM.render(<Hello />, document.getElementById('hello'));

module.exports = Hello;