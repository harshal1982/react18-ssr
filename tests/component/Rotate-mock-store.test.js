import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureMockStore();
let state = {
  rotate: {
    rotating: true,
  },
  todos: 
    [{ title: 'Mock Title' }],
  something:  [{ title: 'Mock Title' }],
  
};

beforeEach(() => {
	
  });
  
const store = mockStore(() => state);
// Importing the jest testing library
//import '@testing-library/jest-dom'
import Rotate from '../../src/app/component/old-style/Rotate';

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});
jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));

test('Rotate Component', () => {
  const setStateMock = jest.fn();
  const useSateMock = (useState) => [useState, setStateMock];

  jest.spyOn(React, 'useState').mockImplementation(useSateMock);
  const component = renderer.create(
    <Provider store={store}>
      <Rotate />
    </Provider>
  );
  let tree = component.toJSON();
});

test('Rotate Component', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Rotate />
    </Provider>
  );
  let tree = component.toJSON();
});

test('Rotate Component- change store', () => {
  state.rotate.rotating = false;
 
  const component = renderer.create(
    <Provider store={store}>
      <Rotate />
    </Provider>
  );
  let tree = component.toJSON();
});
