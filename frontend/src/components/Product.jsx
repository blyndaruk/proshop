import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
  const { _id, name, image } = product
  return (
    <Card className="product my-3 py-3 rounded">
      <a href={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
      </a>
      <Card.Body>
        <a href={`/product/${_id}`}>
          <Card.Title as="div">
            {name}
          </Card.Title>
        </a>
        <Card.Text as="div"></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
