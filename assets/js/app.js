import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import StateAnalysis from './components/StateAnalysis';
import USAMap from './components/USAMap';

let store = createStore(reducers);

const App = (props) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <USAMap />
          <StateAnalysis />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
