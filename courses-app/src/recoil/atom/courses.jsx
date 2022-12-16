import { atom } from 'recoil';
import { mockedCoursesList } from '../../mockedCoursesList';

const courses = atom({
  key: 'coursesState',
  default: mockedCoursesList,
});

export default courses;
