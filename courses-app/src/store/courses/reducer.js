import * as actions from './actionTypes';
// id: '',
// title: '',
// description: '',
// creationDate: '',
// duration: 0,
// authors: [],
// eslint-disable-next-line default-param-last
export default function courseReducer(state = [], action) {
  if (action.type === actions.COURSE_CREATED) {
    console.log(action.payload);
    return ([
      ...state,
      ...action.payload,
    ]);
  }
  if (action.type === actions.COURSE_DELETED) {
    return state.filter((c) => c.id !== action.payload.id);
  }

  return state;
}
