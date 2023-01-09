import axios from 'axios';
import { getToken } from './AuthService';

const api = 'http://localhost:4000';
const headers = {
  'Content-type': 'application/json',
  Authorization: getToken(),
};
const config = {
  headers,
};
export const getCourses = () => axios.get(`${api}/courses/all`);
export const getAuthors = () => axios.get(`${api}/authors/all`);

export const createAuthor = (async (author) => {
  console.log(author);

  const resp = axios.post(`${api}/authors/add`, author, config);
  return resp;
});
export const createCourse = (async (course) => {
  const resp = await axios.post(`${api}/courses/add`, course, config);
  return resp;
});
export const deleteCourse = (async (id) => {
  const resp = await axios.delete(`${api}/courses/${id}`, config);
  return resp;
});
