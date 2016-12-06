import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import stateAnalysis from './StateAnalysis';

const reducer = combineReducers({
  stateAnalysis,
  form: formReducer,
});

export default reducer;
