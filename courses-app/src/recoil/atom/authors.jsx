import { atom } from 'recoil';
import { mockedAuthorsList } from '../../mockedCoursesList';

const authors = atom({
  key: 'authorsState',
  default: mockedAuthorsList,
});

export default authors;
