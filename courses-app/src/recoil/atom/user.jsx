import { atom } from 'recoil';

const user = atom({
  key: 'user',
  default: {
    id: '',
    email: '',
    password: '',
    name: '',
  },
});

export default user;
