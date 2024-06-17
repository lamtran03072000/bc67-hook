import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const ListPhone = () => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
        }}
        cover={
          <img
            alt="example"
            height={200}
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <p>Tên sản phẩm</p>
        <button className="btn btn-success">Mua ngay</button>
      </Card>
    </div>
  );
};

export default ListPhone;
