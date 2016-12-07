export const SUBMIT_STATE_ANALYSIS_NORMAL_QUERY = 'SUBMIT_STATE_ANALYSIS_NORMAL_QUERY';
export const SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY = 'SUBMIT_STATE_ANALYSIS_CUSTOM_QUERY';

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
