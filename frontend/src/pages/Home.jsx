import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Product from '../components/Product';

const Home = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products')
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

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
