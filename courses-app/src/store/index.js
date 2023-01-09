/* eslint-disable max-len */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/reducer';
import courseReducer from './courses/reducer';
import authorReducer from './authors/reducer';
// import { getCourses, getAuthors } from '../services/CoursesService';

const rootReducer = combineReducers({ users: userReducer, courses: courseReducer, authors: authorReducer });
// const c = await getCourses();
// const a = await getAuthors();
// const preloadedState = { courses: c, authors: a };
const store = configureStore({ reducer: rootReducer });
export default store;
// const store = {
//   user: {
//     isAuth: boolean, // default value - false. After success login -true
//     name: string, // default value - empty string. After success login - name of user
//     email: string, // default value - empty string. After success login - email of user
//     token: string, // default value - empty string or token valuefrom localStorage. After success login - value from API /login response. See Swagger.
//   },
//   courses: [], // list of courses. Default value - empty array. After success getting courses - value from API /courses/all response. See Swagger.
//   authors: [], // list of authors. Default value - empty array. After success getting authors - value from API /authors/all response. See Swagger.
// };
