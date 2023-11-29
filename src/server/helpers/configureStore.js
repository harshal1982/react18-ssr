import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../app/reducers/counter';
import todo from '../../app/reducers/todo';
import rotate from '../../app/reducers/rotate';
let preloadedState = {
  rotate: { rotating: true },
  todo: {
    isLoading: true,
    data: [{ title: 'SomeTitle' }],
    status: 'idle',
    isError: true,
  },
  counter: {
    value: 10,
  },
};

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo,
    rotate,
  },
  preloadedState,
});
