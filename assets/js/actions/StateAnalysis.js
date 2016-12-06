export const SUBMIT_STATE_ANALYSIS_NORMAL_QUERY = 'SUBMIT_STATE_ANALYSIS_NORMAL_QUERY';

export function submitStateAnalysisNormalQuery(value) {
  return {
    type: SUBMIT_STATE_ANALYSIS_NORMAL_QUERY,
    value,
  };
}
