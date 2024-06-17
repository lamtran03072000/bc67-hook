import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChairAction } from '../../../redux/movie/movieSlice';

const ListChair = () => {
  let { listChairs, chairDangDat } = useSelector((state) => state.movieReducer);
  console.log('listChairs: ', listChairs);

  const dispatch = useDispatch();
  const renderListChair = () => {
    return listChairs.map((c) => {
      let classChair = 'btn-success';
      if (c.isDaDat) {
        classChair = 'btn-dark';
      }

      chairDangDat.forEach((item) => {
        if (item.soGhe == c.soGhe) {
          classChair = 'btn-primary';
        }
      });

      return (
        <button
          disabled={c.isDaDat}
          onClick={() => {
            dispatch(addChairAction(c));
            // { soGhe: '06', gia: 5301, isDaDat: false }
          }}
          className={`btn ${classChair} col-1 m-1`}
        >
          {c.soGhe}
        </button>
      );
    });
  };

  return <div className="row ">{renderListChair()}</div>;
};

export default ListChair;
