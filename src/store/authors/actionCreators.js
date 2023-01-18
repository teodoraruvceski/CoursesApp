import {
  AUTHOR_SET, AUTHOR_CREATED, AUTHOR_DELETED, AUTHOR_CLEARED,
} from './actionTypes';

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
export function authorCleared() {
  const action = {
    type: AUTHOR_CLEARED,
    payload: '',
  };
  return action;
}
export function authorSet(authors) {
  const action = {
    type: AUTHOR_SET,
    payload: authors,
  };
  return action;
}
