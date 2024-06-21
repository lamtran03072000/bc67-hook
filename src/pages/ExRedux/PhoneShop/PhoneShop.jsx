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
        setOpen(true);
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
      title: 'Đây là một sản phẩm trong cửa hàng',
      nextButtonProps: {
        children: 'Bước tiếp theo',
      },
      description: (
        <div>
          'Bạn có thể mua sản phẩm này bằng cách click vào nút mua hàng'
          {/* <img
            src="https://media.vneconomy.vn/w800/images/upload/2021/04/20/1-15287798691391393904544-0-0-482-858-crop-15287798725121646656721.jpg"
            width={'100%'}
            height={'100%'}
            alt=""
          /> */}
        </div>
      ),
      target: () => ref1.current,
    },
    {
      title: 'Đây là giỏ hàng',
      description: 'Các sản phẩm bạn mua sẽ được cho vào giỏ hàng',
      target: () => ref2.current,
    },
  ];

  useEffect(() => {
    fetchListPhoneApi();
  }, []);
  return (
    <div>
      <br />
      <br />
      <PhoneCart refCart={ref2} />
      <ListPhone refCard={ref1} />
      {/* Tour */}
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  );
};

export default PhoneShop;
