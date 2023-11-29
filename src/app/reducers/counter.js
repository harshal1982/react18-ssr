import { createSlice } from '@reduxjs/toolkit';
let state = {
  initialState: {
    value: 0,
  },
};
let actions = {
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
};

export const counter = createSlice({
  name: 'counter',
  ...state,
  ...actions,
});

export const { increment, decrement, incrementByAmount } = counter.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;

export default counter.reducer;
