import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NumberRedux = () => {
  //   const numberFromRedux = useSelector((state) => {
  //     return state.numberReducer;
  //   });
  const numberFromRedux = useSelector((state) => state.numberReducer);

  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number :{numberFromRedux}</h3>
      <button
        onClick={() => {
          // tạo object action để đưa lên redux
          let action = {
            // Type là thuộc tính bắt buộc để gửi action lên redux
            type: 'CHANGE_NUMBER_ACTION',

            // payload là dữ liệu sẽ đưa lên redux
            payload: numberFromRedux + 1,
          };

          dispatch(action);
        }}
        className="btn btn-success"
      >
        plus number
      </button>
    </div>
  );
};

export default NumberRedux;
