import * as actions from './actionTypes';

// eslint-disable-next-line default-param-last
export default function courseReducer(state = [], action) {
  if (action.type === actions.COURSE_CREATED) {
    return ([
      ...state,
      ...action.payload,
    ]);
  }
  if (action.type === actions.COURSE_DELETED) {
    return state.filter((c) => c.id !== action.payload.id);
  }
  if (action.type === actions.COURSE_CLEARED) {
    return [];
  }
  if (action.type === actions.COURSE_SET) {
    return action.payload;
  }
  if (action.type === actions.COURSE_UPDATED) {
    const filtered = state.filter((c) => c.id !== action.payload.id);
    return ([
      ...filtered,
      action.payload,
    ]);
  }

  return state;
}
