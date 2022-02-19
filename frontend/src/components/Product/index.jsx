import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '../Rating';
import styles from './Product.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { _id, name, image, description, rating, numReviews, price } = product
  const cx = classNames('my-3 rounded text-start', styles.product);

  return (
    <Card className={cx}>
      <Link to={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            {name}
          </Card.Title>
        </Link>
        <Card.Text as="div">
          {description}
        </Card.Text>
        <Card.Text as="div" className="mt-auto">
          <div className="mt-3 text-lowercase">
            <Rating rating={rating} numReviews={numReviews} />
          </div>
        </Card.Text>
        <Card.Text as="h3" className="mt-3">
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
