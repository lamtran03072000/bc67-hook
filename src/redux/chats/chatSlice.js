//  rxslice

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listChats: ['Xin chào mọi người', 'Bc67 abcbcbbcbc'],

  userMess: 'xin chào',
};

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    handleChangeMessageAction: (state, action) => {
      state.userMess = action.payload;
    },

    handleAddMessage: (state, action) => {
      state.listChats.push(state.userMess);
    },
  },
});

export const { handleChangeMessageAction, handleAddMessage } =
  chatSlice.actions;

export default chatSlice.reducer;
