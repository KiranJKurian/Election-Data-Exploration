import { GOT_TABLE_DATA } from '../actions';

const Tables = (state = { normal: {} }, action) => {
  switch (action.type) {
    case GOT_TABLE_DATA:
      return { ...state, data: action.value };
    default:
      return state;
  }
};

export default Tables;
