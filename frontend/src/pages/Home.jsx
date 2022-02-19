import React from 'react';
import products from '../products';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product';

const Home = () => {
  return (
    <>
      <h1 className="mt-4">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3} className="text-center text-capitalize py-3">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
