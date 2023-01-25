/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import { render, screen, expect } from '@testing-library/react';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { jest, test } from '@babel/core';e
import Header from '../Header';

const mockedState = {
  user: {
    isAuth: true,
    name: 'Test Name',
  },
  courses: [],
  authors: [],
};
const mockedStore = {
  getState: () => mockedState,
  subscribe: jest.fn(),
  dispatch: jest.fn(),
};
test('renders header', () => {
  render(
    <Provider store={mockedStore}>
      <Header />
    </Provider>,
  );
  const linkElement = screen.getByText(/Test Name/i);
  expect(linkElement).toBeInTheDocument();
});
