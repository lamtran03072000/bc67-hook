import { configureStore } from '@reduxjs/toolkit';
import { numberSlice } from './number/numberSlice';
import fontsizeSlice from './fontsize/fontsizeSlice';
import carSlice from './car/carSlice';
import chatSlice from './chats/chatSlice';
import movieSlice from './movie/movieSlice';

export const store = configureStore({
  reducer: {
    // Là nơi chứa toàn bộ state của ứng dụng
    numberReducer: numberSlice,

    fontSizeReducer: fontsizeSlice,

    carReducer: carSlice,

    chatReducer: chatSlice,

    movieReducer: movieSlice,
  },
});
