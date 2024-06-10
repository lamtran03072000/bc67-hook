// rxslice

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  img: './img/imgBlackCar.jpg',
};

const carSlice = createSlice({
  name: 'carSlice',
  initialState,
  //   Tất cả action sẽ được viết trong reducer
  reducers: {
    changeCarAction: (state, action) => {
      state.img = action.payload;
      console.log('action.payload', action.payload);
    },
  },
});

export const { changeCarAction } = carSlice.actions;

export default carSlice.reducer;
