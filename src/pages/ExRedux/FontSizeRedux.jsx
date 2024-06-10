import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFontSize } from '../../redux/fontsize/fontsizeSlice';

const FontSizeRedux = () => {
  const { number } = useSelector((state) => state.fontSizeReducer);

  const dispatch = useDispatch();

  return (
    <div>
      <p
        style={{
          fontSize: number,
        }}
      >
        Hello bc 67
      </p>
      <button
        onClick={() => {
          dispatch(changeFontSize(number + 1));
        }}
      >
        Plus font size
      </button>
    </div>
  );
};

export default FontSizeRedux;
