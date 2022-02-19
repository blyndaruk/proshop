import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, numReviews, color }) => {
  return (
    <div className="rating" style={{ color }}>
      <i className={rating >= 1 ? 'fas fa-star' : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      <i className={rating >= 2 ? 'fas fa-star' : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      <i className={rating >= 3 ? 'fas fa-star' : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      <i className={rating >= 4 ? 'fas fa-star' : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      <i className={rating >= 5 ? 'fas fa-star' : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'} />
      <span className="ms-2" style={{ color: '#000' }}>{numReviews} reviews</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#ffc133',
}

Rating.propTypes = {
  rating: PropTypes.number,
  numReviews: PropTypes.number,
  color: PropTypes.string,
}

export default Rating;
