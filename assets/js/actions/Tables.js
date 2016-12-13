export const GOT_TABLE_DATA = 'GOT_TABLE_DATA';

export function gotTableData(value) {
  return {
    type: GOT_TABLE_DATA,
    value,
  };
}
