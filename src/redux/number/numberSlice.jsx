export const numberSlice = (state = 10, action) => {
  if (action.type === 'CHANGE_NUMBER_ACTION') {
    console.log('numberReducer', action);

    state = action.payload;

    return state;
  }

  return state;
};
