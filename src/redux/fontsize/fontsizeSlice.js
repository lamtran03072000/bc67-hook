import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  number: 17,
};

const fontSizeSlice = createSlice({
  name: 'fontSizeSlice', // giúp cấu tạo nên action type
  initialState: initialState,

  reducers: {
    changeFontSize: (state, action) => {
      console.log('action: ', action);

      state.number = action.payload;
    },
  },
});

export const { changeFontSize } = fontSizeSlice.actions;

export default fontSizeSlice.reducer;
