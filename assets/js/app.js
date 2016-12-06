import React from 'react';
import ReactDOM from 'react-dom';
import USAMap from './components/USAMap';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <USAMap />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
