import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoneCart } from '../../../redux/phone/phoneSlice';

const PhoneCart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { cartPhone } = useSelector((state) => state.phoneReducer);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const renderListPhoneCart = () => {
    return cartPhone.map((phone, index) => {
      return (
        <tr>
          <td>{phone.name}</td>
          <td>
            <img width={50} src={phone.img} alt="" />
          </td>
          <td>
            <button className="btn btn-danger">-</button>
            <span>{phone.soLuong}</span>
            <button className="btn btn-primary">+</button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(removePhoneCart(phone));
              }}
              className="btn btn-danger"
            >
              {' '}
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <button className="btn btn-primary" type="primary" onClick={showModal}>
        Giỏ hàng
      </button>
      <Modal
        title="Giỏ hàng điện thoại"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={'75%'}
      >
        <table className="table">
          <thead>
            <tr>
              <td>Tên sản phầm</td>
              <td>Hình</td>
              <td>Số lượng</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{renderListPhoneCart()}</tbody>
        </table>
      </Modal>
    </>
  );
};

export default PhoneCart;
