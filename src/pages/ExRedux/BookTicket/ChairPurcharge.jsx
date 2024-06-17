import React from 'react';
import { useSelector } from 'react-redux';

const ChairPurcharge = () => {
  const { chairDangDat } = useSelector((state) => state.movieReducer);
  console.log('chairDangDat: ', chairDangDat);

  const renderListChairDangDat = () => {
    return chairDangDat.map((c) => {
      return (
        <tr>
          <td>{c.soGhe}</td>
          <td>{c.gia}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <h3>Dang sách ghế đang đặt</h3>
      <table className="table">
        <thead>
          <tr>
            <td>Mã ghế</td>
            <td>Giá tiền</td>
          </tr>
        </thead>
        <tbody>{renderListChairDangDat()}</tbody>
        <tfoot>
          <tr>
            <td>Tổng tiền</td>
            <td>
              {chairDangDat.reduce((pre, current) => {
                return current.gia + pre;
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ChairPurcharge;
