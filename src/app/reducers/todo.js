import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
	console.log('Api Called');
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
	return res?.json();
 });

const todoSlice = createSlice({
  name: "todo",
  initialState: {
   isLoading: false,
   data: [],
   status:'idle',
   isError: false
  },
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(fetchTodos.pending, (state, action) => {
    state.isLoading = true;
	state.status='pending';
	console.log('In Pending')
   })
   builder.addCase(fetchTodos.fulfilled, (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
	state.status='success';
   })
   builder.addCase(fetchTodos.rejected, (state, action) => {
    state.isError = true;
	state.status='error';
   })
  }
 });

export default todoSlice.reducer;