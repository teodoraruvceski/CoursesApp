import axios from 'axios';

export const getCourses = () => axios.get('http://localhost:4000/courses/all');
export const getAuthors = () => axios.get('http://localhost:4000/authors/all');

export const createAuthor = ((author) => {
  console.log(author);
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  };
  axios.post('http://localhost:4000/authors/add', author, config);
});
export const createCourse = ((course) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  };
  axios.post('http://localhost:4000/courses/add', course, config);
});
