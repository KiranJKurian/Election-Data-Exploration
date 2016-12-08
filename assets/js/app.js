import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux'
import reducers from './reducers'
import StateAnalysis from './components/StateAnalysis';
import USAMap from './components/USAMap';
import Test from './tests/Test';

let store = createStore(reducers);

const App = (props) => {
  return (
    <div>
      <USAMap />
      <StateAnalysis />
    </div>
  );
}

const Root = (props) => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>

        <Router history={browserHistory}>
          <Route path="/" component={App} />
          <Route path="test" component={Test} />
        </Router>

      </MuiThemeProvider>
    </Provider>
  );
}

injectTapEventPlugin();

ReactDOM.render(<Root />, document.getElementById('app'));
