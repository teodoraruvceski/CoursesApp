import {
  COURSE_SET, COURSE_CLEARED, COURSE_CREATED, COURSE_DELETED, COURSE_UPDATED,
} from './actionTypes';

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
export function courseCleared() {
  const action = {
    type: COURSE_CLEARED,
    payload: '',
  };
  return action;
}
export function courseSet(courses) {
  const action = {
    type: COURSE_SET,
    payload: courses,
  };
  return action;
}
export function courseUpdated(course) {
  const action = {
    type: COURSE_UPDATED,
    payload: course,
  };
  return action;
}
