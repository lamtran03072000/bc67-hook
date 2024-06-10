import React, { useState } from 'react';
import ImgAvatar from './ImgAvatar';

// xây giao diện
// Xác định state
// bindding state
// Set state
const ExState = () => {
  const [numberPicture, setNumberPicture] = useState(5);

  return (
    <div className="container">
      <div className="card w-25">
        <ImgAvatar numberPicture={numberPicture} />
        <div className="card-body">
          <button
            onClick={() => {
              setNumberPicture(numberPicture + 1);
            }}
            className="btn btn-success"
          >
            Next picture
          </button>
          <button
            onClick={() => {
              setNumberPicture(numberPicture - 1);
            }}
            className="btn btn-danger ms-2"
          >
            Prev picture
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExState;
