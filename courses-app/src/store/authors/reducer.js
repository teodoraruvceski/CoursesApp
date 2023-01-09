/* eslint-disable default-param-last */
import * as actions from './actionTypes';

export default function authorReducer(state = [], action) {
  if (action.type === actions.AUTHOR_CREATED) {
    return ([
      ...state,
      ...action.payload,
    ]);
  }
  if (action.type === actions.AUTHOR_DELETED) {
    return state.filter((c) => c.id !== action.payload.id);
  }

  return state;
}
