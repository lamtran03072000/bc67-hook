import React, { useEffect, useRef, useState } from 'react';
import PhoneCart from './PhoneCart';
import ListPhone from './ListPhone';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postListPhoneAction } from '../../../redux/phone/phoneSlice';
import { Tour } from 'antd';

const PhoneShop = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
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

  const ref1 = useRef();
  const ref2 = useRef();
  // tour
  const steps = [
    {
      title: 'Bước 1',
      description: 'Put your files here.',
      target: () => ref1.current,
    },
    {
      title: 'Bước 2',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
  ];

  useEffect(() => {
    fetchListPhoneApi();
  }, []);
  return (
    <div>
      <button ref={ref1} className="btn btn-success me-3">
        Bước 1
      </button>
      <button ref={ref2} className="btn btn-primary">
        Bước 2
      </button>
      <br />
      <br />
      <PhoneCart />
      <ListPhone />
      {/* Tour */}
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  );
};

export default PhoneShop;
