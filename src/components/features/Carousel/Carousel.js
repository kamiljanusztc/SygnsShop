import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Carousel.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.hotDealsContent}>
      <h4 className={styles.hotDealsTitle}>HOT DEALS</h4>
      <p className={styles.hotDealsText}>The most frequently ordered products</p>
    </div>
    <Carousel
      // activeIndex={index} onSelect={handleSelect}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/products/hot-deal.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className={styles.hotDealTitle}>HEART</h3>
          <Link className={styles.btn}>
            See more
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/products/hot-deal-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={styles.hotDealTitle}>BOB</h3>
          <Link className={styles.btn}>
            See more
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/products/hot-deal-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={styles.hotDealTitle}>BOOM!</h3>
          <Link className={styles.btn}>
            See more
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Carousel,
  // Container as Carousel,
  Component as CarouselComponent,
};


