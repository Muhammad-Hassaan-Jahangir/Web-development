import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// Async thunk for incrementing by amount after delay
export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return amount;
  }
);

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if( state.value > 0 ){
      state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer