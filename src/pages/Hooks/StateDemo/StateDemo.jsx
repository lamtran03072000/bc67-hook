import React, { useState } from 'react';

const StateDemo = () => {
  const [number, setNumber] = useState(5); // arr[]
  //       arr[0] , arr[1]
  //       state  , setState

  //   const [state, setSate] = useState({
  //     like: 1,
  //     view: 1,
  //   });

  //   ở bên react hook thì thường 1 state sẽ quản lý 1 giá trị
  const [like, setLike] = useState(2);
  const [view, setView] = useState(6);

  return (
    <div className="container">
      <h3>Number :{number}</h3>

      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-success"
      >
        plus
      </button>

      <h3>Like : {like}</h3>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
        className="btn btn-danger"
      >
        plus like
      </button>

      <h3>View : {view}</h3>
      <button
        onClick={() => {
          setView(view + 2);
        }}
        className="btn btn-primary"
      >
        plus view
      </button>
    </div>
  );
};

export default StateDemo;
