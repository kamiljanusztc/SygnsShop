import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import clsx from 'clsx';

import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { addToCart, removeFromCart  } from '../../../redux/cartRedux.js';
// import { removeFromCart  } from '../../../redux/cartRedux.js';
import styles from './Cart.module.scss';
import { CartItem } from '../CartItem/CartItem';
// import { useDispatch } from 'react-redux';
class Component extends React.Component {

  state = {
    cart: [],
    totalAmount: 0,
  }

  componentDidMount() {
    let localStorageData = localStorage.getItem('cart');
    let cart = JSON.parse(localStorageData);
    console.log('cart', cart);

    //setState totalprice;
    // this.setState({'totalPrice' : this.state.totalPrice +1});
    // const newPrice =+ cart.price;
    // this.setState({totalPrice: newPrice});
    this.setState({'cart': cart});

    const amount = cart.map((item) => {
      return Number(item.quantity) * Number(item.price);
    } ).reduce( ( total, current ) => total += current );

    this.setState({totalAmount: amount});
  }

  // sumTotalAmount = this.sumTotalAmount.bind( this );

  // sumTotalAmount() {
  //   let cart = this.state.cart;
  //   let totalAmount = cart.map( ( item ) => {
  //     return Number(item.quantity) * Number(item.price);
  //   } ).reduce( ( total, current ) => total += current );

  //   this.setState( {
  //     totalAmount,
  //   } );
  // }

  render() {
    const {className, cart} = this.props;
    // const { cartItems } = cart;

    // const dispatch = useDispatch();
    // const removeFromCartHandler = (id) => {
    //   dispatch(removeFromCart(id));
    // };

    return (

      <div className={clsx(className, styles.root)}>

        {cart && cart.length > 0  ?
          <>
            <h3>Cart is currently empty</h3>

          </>
          :
          <>
            <div className={styles.cartContainer}>
              <div className={styles.cartTitle}>
                <ShoppingCartOutlinedIcon className={styles.cartIcon}/>
                <h4>My shopping cart</h4>
              </div>
              {/* {cart && cart.map((item) => <CartItem key={item._id} {...item} />)} */}
              {this.state.cart.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  // removeHandler={removeFromCartHandler}
                />
              ))}
              {/* <CartItem/> */}
              <div className="row">
                <div className="col-md-12">
                  <p className={styles.totalPrice}>
                    Total price:

                    {totalUsingMap}
                    {/* {totalPrice} */}





                    {/* 999 € */}
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


const cartData = [
  {
    price: 23,
    id: 1,
  },
  {
    price: 27,
    id: 2,
  },
  {
    price: 60,
    id: 2,
  },
  {
    price: 40,
    id: 4,
  },
];

const findSumUsingReduce = () => {
  const s = cartData.reduce((s, {price} ) => s + price, 0);
  return s;
};

const totalUsingMap = findSumUsingReduce();

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  totalPrice: PropTypes.number,
};

const mapStateToProps = state => ({
  cart: state.cart,
  // qtyChangeHandler:
  // removeFromCartHandler:
});

// const qtyChangeHandler = (id, qty) => {
//   dispatch(addToCart(id, qty));
// };

// const removeFromCartHandler = (id) => {
//   dispatch(removeFromCart(id));
// };

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
