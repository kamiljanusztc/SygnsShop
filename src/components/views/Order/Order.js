import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Order.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>

    <div className={styles.orderContainer}>
      <h4>Order summary</h4>
      <div className={styles.line}></div>
      <div className="row">

        <div className="col-md-6">
          <h6>Products</h6>
          <div className={styles.products}>
            <p className={styles.content}>
              Product:
            </p>
            <p className={styles.content}>
              TITLE
            </p>
          </div>

        </div>

        <div className="col-md-6">
          <h6>Contanct form</h6>
        </div>

      </div>


    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as Order,
  // Container as Order,
  Component as OrderComponent,
};
