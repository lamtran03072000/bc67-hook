import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Là nơi chứa toàn bộ state của ứng dụng
    numberReducer: (state = 10, action) => {
      if (action.type === 'CHANGE_NUMBER_ACTION') {
        console.log('numberReducer', action);

        state = action.payload;

        return state;
      }

      return state;
    },

    fontSizeReducer: (state = 12, action) => {
      console.log('fontSizeReducer', action);
      return state;
    },
  },
});
