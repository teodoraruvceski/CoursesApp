import { COURSE_CREATED, COURSE_DELETED } from './actionTypes';

export function courseCreated(course) {
  const action = {
    type: COURSE_CREATED,
    payload: course,
  };
  return action;
}
export function courseDeleted(id) {
  const action = {
    type: COURSE_DELETED,
    payload: { id },
  };
  return action;
}
