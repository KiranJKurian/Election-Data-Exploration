import { SUBMIT_STATE_ANALYSIS_NORMAL_QUERY, SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY } from '../actions';

const StateAnalysis = (state = { normal: {} }, action) => {
  switch (action.type) {
    case SUBMIT_STATE_ANALYSIS_NORMAL_QUERY:
      return { ...state, normal: { result: action.value } };
    case SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY:
      return { ...state, custom: { result: action.value } };
    default:
      return state;
  }
};

export default StateAnalysis;
