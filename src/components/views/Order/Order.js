import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import styles from './Order.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>

    <div className={styles.orderContainer}>
      <h4>Order summary</h4>
      <div className="row">
        <div className="col-md-8">
          <div className={styles.orderBox}>
            <h6>Products</h6>
            <div className={styles.products}>
              <div className={styles.type}>
                <p>Product:</p>
                <p>Quantity:</p>
                <p>Price:</p>
              </div>
              <div className={styles.content}>
                <p>TITLE</p>
                <p>1</p>
                <p>900 €</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={styles.orderBox}>
            <h6>Shipping address</h6>
            <form className={styles.form} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Name" required fullWidth />
              <TextField id="standard-basic" label="Surname" fullWidth />
              <TextField id="standard-basic" label="Company" fullWidth />
              <TextField id="standard-basic" label="Phone" required fullWidth />
              <TextField id="standard-basic" label="E-mail" required fullWidth />
              <TextField id="standard-basic" label="Country" fullWidth />
              <TextField id="standard-basic" label="Address" required fullWidth />
              <TextField
                id="standard-multiline-flexible"
                label="Message"
                multiline
                rowsMax={4}
                fullWidth
                // value={value}
                // onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
      <Link className={styles.confirmOrder} to="/success">Confirm</Link>
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
