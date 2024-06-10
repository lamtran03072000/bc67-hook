import React from 'react';

// ở react function thì nhận props qua tham số của coponent
const ImgAvatar = (props) => {
  return <img src={`https://i.pravatar.cc?u=${props.numberPicture}`} alt="" />;
};

export default ImgAvatar;
