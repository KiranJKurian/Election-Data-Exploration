import React from 'react';
import ReactDOM from 'react-dom';

var World = React.createClass({
	render : function(){
		return <h1>World</h1>;
	}
});

ReactDOM.render(<World />, document.getElementById('world'));

module.exports = World;