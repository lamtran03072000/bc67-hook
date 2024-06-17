import React, { useEffect, useState } from 'react';
import PhoneCart from './PhoneCart';
import ListPhone from './ListPhone';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postListPhoneAction } from '../../../redux/phone/phoneSlice';

const PhoneShop = () => {
  const dispatch = useDispatch();
  const fetchListPhoneApi = () => {
    const promise = axios({
      url: 'https://65fbd25014650eb2100ab501.mockapi.io/phone',
      method: 'GET',
    });

    promise
      .then((res) => {
        dispatch(postListPhoneAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchListPhoneApi();
  }, []);
  return (
    <div>
      <PhoneCart />
      <ListPhone />
    </div>
  );
};

export default PhoneShop;
