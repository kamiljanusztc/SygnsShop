import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

import styles from './Order.module.scss';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.findSumUsingReduce = findSumUsingReduce.bind(this);
  }

  state = {
    cart: [],
  }

  componentDidMount() {
    let localStorageData = localStorage.getItem('cart');
    let cart = JSON.parse(localStorageData);
    console.log('cart', cart);
    this.setState({ 'cart': cart });
  }

  render() {
    const { className } = this.props;

    return (

      <div className={clsx(className, styles.root)}>
        <div className={styles.orderContainer}>
          <h4>Order summary</h4>
          <div className="row">
            <div className="col-md-8">
              <div className={styles.orderBox}>
                <h6>Products</h6>
                {this.state.cart.map((item) => (
                  <div className={styles.products} key={item.id}>
                    <div className={styles.type}>
                      <p>Product:</p>
                      <p>Quantity:</p>
                      <p>Price:</p>
                    </div>
                    <div className={styles.content}>
                      <p>{item.title}</p>
                      <p>{item.quantity}</p>
                      <p>{item.price * item.quantity} €</p>
                    </div>
                  </div>
                ))}
                <div className="row">
                  <div className="col-md-12">
                    <p className={styles.totalPrice}>
                      Total price: {this.findSumUsingReduce()} €
                    </p>
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
                  />
                </form>
              </div>
            </div>
          </div>
          <Link className={styles.confirmOrder} to="/success">Confirm</Link>
        </div>
      </div>
    );
  }
}

function findSumUsingReduce() {
  let sum = 0;
  this.state.cart.forEach(item => {
    sum += item.price * item.quantity;
  });
  return sum;
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Order,
  Component as OrderComponent,
};
