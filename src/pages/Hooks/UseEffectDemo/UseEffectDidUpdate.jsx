import React, { useEffect, useState } from 'react';

const UseEffectDidUpdate = () => {
  const [number, setNumber] = useState(2);
  const [like, setLike] = useState(1);
  const [view, setView] = useState(2);

  useEffect(() => {
    console.log('useEffect chạy');
    // Thường ứng dụng để call api theo tham số : ví dụ get detail product
  }, [like, view]); // khi nào giá trị trong dependency bị thay đổi thì hàm useEffect này sẽ chạy

  return (
    <div className="container">
      <h3>Like : {like}</h3>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
        className="btn btn-success"
      >
        plus like
      </button>
      <h3>Number : {number}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-success"
      >
        plus number
      </button>
      <h3>View : {view}</h3>
      <button
        onClick={() => {
          setView(view + 1);
        }}
        className="btn btn-success"
      >
        plus view
      </button>
    </div>
  );
};

export default UseEffectDidUpdate;
