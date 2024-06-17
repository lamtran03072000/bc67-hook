import React from 'react';

import { Card, Col, Row } from 'antd';
const { Meta } = Card;

const ListPhone = () => {
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col span={6}>
          <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>Tên sản phẩm</p>
            <button className="btn btn-success">Mua Hàng</button>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>Tên sản phẩm</p>
            <button className="btn btn-success">Mua Hàng</button>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>Tên sản phẩm</p>
            <button className="btn btn-success">Mua Hàng</button>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>Tên sản phẩm</p>
            <button className="btn btn-success">Mua Hàng</button>
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{
              width: '100%',
            }}
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <p>Tên sản phẩm</p>
            <button className="btn btn-success">Mua Hàng</button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ListPhone;
