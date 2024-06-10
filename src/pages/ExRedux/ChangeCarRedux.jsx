import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCarAction } from '../../redux/car/carSlice';

// xây giao diện
// xác định state
// Bindding state lên giao diện (lấy state từ redux về )
// Set state (dispatch)
const ChangeCarRedux = () => {
  const { img } = useSelector((state) => state.carReducer);

  const dispatch = useDispatch();

  const handleChangeCar = (linkImg) => {
    // let action = {
    //   type: 'CHANGE_CAR_ACTION',
    //   payload: linkImg,
    // };

    dispatch(changeCarAction(linkImg));
  };

  return (
    <div className="container">
      <img src={img} alt="" height={300} />

      <br />

      <button
        onClick={() => {
          // tạo action object để gửi lên redux
          handleChangeCar('./img/imgBlackCar.jpg');
        }}
        className="btn btn-dark"
      >
        Black
      </button>
      <button
        onClick={() => {
          // tạo action object để gửi lên redux
          handleChangeCar('./img/imgRedCar.jpg');
        }}
        className="btn btn-danger"
      >
        Red
      </button>
      <button
        onClick={() => {
          // tạo action object để gửi lên redux
          handleChangeCar('./img/imgSilverCar.jpg');
        }}
        className="btn btn-primary"
      >
        silver
      </button>
    </div>
  );
};

export default ChangeCarRedux;
