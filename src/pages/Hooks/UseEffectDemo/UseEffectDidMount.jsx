import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseEffectDidMount = () => {
  const [number, setNumber] = useState(1);
  const [arrayListPhone, setArrayListPhone] = useState([]);

  const fetchApiListPhone = () => {
    let promise = axios({
      url: 'https://65fbd25014650eb2100ab501.mockapi.io/phone',
      method: 'GET',
    });

    promise
      .then((res) => {
        console.log('res: ', res.data);
        let listPhone = res.data;

        setArrayListPhone(listPhone);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    // Lần 1 : chạy sau khi giao diện render
    // Lần 2:  Chạy sau mỗi lần component render lại (Khi state hoặc props bị thay đổi)

    console.log('useEffect CHẠY');

    fetchApiListPhone();
  }, []); // dependency[] , khi dependency là 1 array rỗng thì useEffect sẽ chạy 1 lần sau khi render giao diện => ứng dụng để call api get all ()

  console.log('giao diện render');

  return (
    <div className="container">
      <h3>Number : {number}</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
        className="btn btn-success"
      >
        Plus number
      </button>

      <h3>List phone</h3>

      <div className="row">
        {arrayListPhone.map((phone) => {
          return (
            <div className="card col-3">
              <img src={phone.img} alt="" />
              <div className="card-body">
                <h3>{phone.name}</h3>
                <button className="btn btn-success">Xem chi tiết</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectDidMount;
