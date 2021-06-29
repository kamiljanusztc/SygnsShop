import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { connect } from 'react-redux';

import { removeFromCart } from '../../../redux/cartRedux.js';
import styles from './Cart.module.scss';
import { CartItem } from '../CartItem/CartItem';
class Component extends React.Component {

  constructor(props) {
    super(props);
    this.fetchData = fetchData.bind(this);
    this.findSumUsingReduce = findSumUsingReduce.bind(this);
  }

  state = {
    cart: [],
    totalAmount: 0,
  }

  componentDidMount() {
    let localStorageData = localStorage.getItem('cart');
    let cart = JSON.parse(localStorageData);
    console.log('cart', cart);
    this.setState({ 'cart': cart });
  }

  render() {
    const { className, cart } = this.props;

    return (
      <div className={clsx(className, styles.root)}>

        {cart && cart.length > 0 ?
          <>
            <h3>Cart is currently empty</h3>
          </>
          :
          <>
            <div className={styles.cartContainer}>
              <div className={styles.cartTitle}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon} />
                <h4>My shopping cart</h4>
              </div>
              {this.state.cart.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  removeHandler={() => this.fetchData()}
                />
              ))}
              <div className="row">
                <div className="col-md-12">
                  <p className={styles.totalPrice}>
                    Total price: {this.findSumUsingReduce()} €
                  </p>
                  <Link className={styles.order} to="/order">Order</Link>
                </div>
              </div>
            </div>
          </>
        }
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

function fetchData() {
  let localStorageData = localStorage.getItem('cart');
  let cart = JSON.parse(localStorageData);
  console.log('cart', cart);
  this.setState({ 'cart': cart });
}

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  totalPrice: PropTypes.number,
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCartHandler: (id) => dispatch(removeFromCart(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
