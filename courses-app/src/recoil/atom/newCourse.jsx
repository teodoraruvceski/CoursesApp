import { atom } from 'recoil';

const newCourse = atom({
  key: 'newCourseState',
  default: {
    id: '',
    title: '',
    description: '',
    creationDate: '',
    duration: 0,
    authors: [],
  },
});

export default newCourse;
