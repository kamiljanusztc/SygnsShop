import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.cartContainer}>
      <div className={styles.cartTitle}>
        <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
        <h4>My shopping cart</h4>
      </div>
      <div className={styles.navCart}>
        <div className="row">
          <div className="col-md-2">
            <h6>Item</h6>
          </div>
          <div className="col-md-2">
            <h6>Quantity</h6>
          </div>
          <div className="col-md-2">
            <h6>Unit price</h6>
          </div>
          <div className="col-md-2">
            <h6>Total price</h6>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.product}>
        <div className="row">
          <div className="col-md-2">
            <p>
            TITLE
            </p>
          </div>
          <div className="col-md-2">
            <input type="number" id="quantity" name="quantity" min="1" max="99"/>
          </div>
          <div className="col-md-2">
            <p>
          90 €
            </p>
          </div>
          <div className="col-md-2">
            <p>
          999 €
            </p>
          </div>
          <div className="col-md-2">
            <input type="text" id="lname" placeholder="Add message" name="lname"/><br></br>
          </div>
          <div className="col-md-2">
            <DeleteOutlinedIcon className={styles.remove}/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Link className={styles.order} to="/order">Order</Link>
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
