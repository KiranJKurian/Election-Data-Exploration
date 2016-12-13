import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import stateAnalysis from './StateAnalysis';
import tables from './Tables';

const reducer = combineReducers({
  tables,
  stateAnalysis,
  form: formReducer,
});

export default reducer;
