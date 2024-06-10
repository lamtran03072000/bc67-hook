import React from 'react';
import { useSelector } from 'react-redux';

const FontSizeRedux = () => {
  const fontSize = useSelector((state) => state.fontSizeReducer);
  return (
    <div>
      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Hello bc 67
      </p>
      <button>Plus font size</button>
    </div>
  );
};

export default FontSizeRedux;
