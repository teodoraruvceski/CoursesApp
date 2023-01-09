import { AUTHOR_CREATED, AUTHOR_DELETED } from './actionTypes';

export function authorCreated(author) {
  const action = {
    type: AUTHOR_CREATED,
    payload: author,
  };
  return action;
}
export function authorDeleted(id) {
  const action = {
    type: AUTHOR_DELETED,
    payload: { id },
  };
  return action;
}
