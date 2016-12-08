export const SUBMIT_STATE_ANALYSIS_NORMAL_QUERY = 'SUBMIT_STATE_ANALYSIS_NORMAL_QUERY';
export const SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY = 'SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY';
export const ERROR_STATE_ANALYSIS = 'ERROR_STATE_ANALYSIS';

export function submitStateAnalysisNormalQuery(value) {
  return {
    type: SUBMIT_STATE_ANALYSIS_NORMAL_QUERY,
    value,
  };
}

export function submitStateAnalysisCustomQuery(value) {
  return {
    type: SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY,
    value,
  };
}

export function errorStateAnalysis(value) {
  return {
    type: ERROR_STATE_ANALYSIS,
    value,
  };
}
