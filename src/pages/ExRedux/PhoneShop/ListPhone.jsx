import React from 'react';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoneToCart } from '../../../redux/phone/phoneSlice';
const { Meta } = Card;
const ListPhone = () => {
  let { listPhone } = useSelector((state) => state.phoneReducer);

  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-wrap container">
      {listPhone.map((phone, index) => {
        return (
          <div className="p-2 w-25" key={phone.id}>
            <Card
              hoverable
              cover={<img alt="example" height={200} src={phone.img} />}
            >
              <p>{phone.name}</p>
              <button
                onClick={() => {
                  dispatch(addPhoneToCart(phone));
                }}
                className="btn btn-success"
              >
                Mua ngay
              </button>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ListPhone;
