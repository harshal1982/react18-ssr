import renderer from 'react-test-renderer';
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import renderWithProviders, { setupStore } from '../utils/test-utils';
import Rotate from '../../src/app/component/old-style/Rotate';
jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));
test('Rotate with actual store', async () => {
  const store = setupStore();
  //store.dispatch(todoAdded('Buy milk'))

  renderWithProviders(<Rotate />, {
    preloadedState: {
      rotate: { rotating: true },
      todos: {
        isLoading: false,
        data: [{ title: 'SomeTitle' }],
        status: 'idle',
        isError: false,
      },
    },
  });
});

test('should rotate start counter', () => {
  const { getByAltText } = renderWithProviders(<Rotate />, {
    preloadedState: {
      rotate: { rotating: false },
      todos: {
        isLoading: false,
        data: [{ title: 'SomeTitle' }],
        status: 'idle',
        isError: false,
      },
    },
  });
  fireEvent.click(getByAltText(/logo/i));
  fireEvent.click(getByAltText(/logo/i));
});

test('should rotate stop counter', () => {
  const { getByAltText } = renderWithProviders(<Rotate />, {
    preloadedState: {
      rotate: { rotating: true },
      todos: {
        isLoading: false,
        data: [{ title: 'SomeTitle' }],
        status: 'idle',
        isError: false,
      },
    },
  });
  fireEvent.click(getByAltText(/logo/i));
});
