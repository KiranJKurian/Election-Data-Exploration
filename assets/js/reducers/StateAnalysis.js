import { SUBMIT_STATE_ANALYSIS_NORMAL_QUERY } from '../actions';

const StateAnalysis = (state = { normal: {} }, action) => {
  switch (action.type) {
    case SUBMIT_STATE_ANALYSIS_NORMAL_QUERY:
      return { ...state, normal: { result: action.value } };
    default:
      return state;
  }
};

export default StateAnalysis;
