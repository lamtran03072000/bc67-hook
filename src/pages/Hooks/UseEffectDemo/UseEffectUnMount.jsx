import React, { useEffect } from 'react';

const UseEffectUnMount = () => {
  useEffect(() => {
    let timeLong = 0;

    const timeOut = setInterval(() => {
      timeLong += 1;
      console.log('timeLong', timeLong);
    }, 1000);

    return () => {
      // Renturn trong useEffect sẽ chạy khi coponent này biến mất khỏi giao diện
      console.log('Biến mất khỏi giao diện');

      clearInterval(timeOut);
    };
  }, []);
  return <div>UseEffectUnMount</div>;
};

export default UseEffectUnMount;
