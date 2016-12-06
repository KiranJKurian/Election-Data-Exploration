import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import USAMap from './components/USAMap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };

    this.handleChange = (event, index, value) => this.setState({value});
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <SelectField
            floatingLabelText="Frequency"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <USAMap />
        </div>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
