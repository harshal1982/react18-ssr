import React from 'react';
import { render } from '@testing-library/react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// As a basic setup, import your same slice reducers
import counterReducer from '../../src/app/reducers/counter';
import todo from '../../src/app/reducers/todo';
import rotate from '../../src/app/reducers/rotate';
let preloadedState =  {
	rotate: { rotating: true },
	todo: { isLoading: true,
		data: [{"title":"SomeTitle"}],
		status:'idle',
		isError: true},
	counter: 5
	};
const rootReducer = combineReducers({
  counter: counterReducer,
  todo,
  rotate,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

function renderWithProviders(
  ui,
  {
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export default renderWithProviders;
