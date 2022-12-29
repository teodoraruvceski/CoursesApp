import axios from 'axios';
import jwt from 'jwt-decode';

export const register = (name, email, password) => axios.post('http://localhost:4000/register', {
  name,
  email,
  password,
});

export const login = (email, password) => axios.post('http://localhost:4000/login', {
  name: '',
  email,
  password,
});

export const decodeToken = (token) => {
  console.log('we got token to decode:', token);
  const data = jwt(token);
  // const data = Buffer.from(token.split('.')[1], 'base64');
  return data;
};
