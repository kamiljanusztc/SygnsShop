/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Row, Col } from 'reactstrap';

import styles from './CartItem.module.scss';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.removeFromCart = removeFromCart.bind(this);
    this.updateItemQuantity = updateItemQuantity.bind(this);
  }

  state = {
    quantity: this.props.item.quantity,
    item: this.props.item,
  };

  render() {
    const { className, item, props } = this.props;

    return (
      <div className={clsx(className, styles.root, props)}>
        <div className={styles.cartContainer}>
          <div className={styles.product}>
            <Row >
              <Col xs={12} sm={12} md={4}>
                <p>
                  {item.title}
                </p>
              </Col>
              <Col xs={12} sm={12} md={2} className={styles.qtyWrapper}>
                Quantity:
                <input className={styles.qty} type="number" id="quantity" name="quantity" min="1" max="5"
                  defaultValue={item.quantity}
                  onChange={e => this.updateItemQuantity(e.target.value)}
                />
              </Col>
              <Col xs={12} sm={12} md={2}>
                <p>
                  Price: {this.state.quantity * this.state.item.price} €
                </p>
              </Col>
              <Col xs={12} sm={12} md={2}>
                <input className={styles.message} type="text" id="lname" placeholder="Add message" name="lname" min="1" max="5"/>
                {item.message}
              </Col>
              <Col xs={12} sm={12} md={2}>
                <DeleteOutlinedIcon className={styles.remove}
                  onClick={() => this.removeFromCart(item)}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

function removeFromCart(item) {
  let localStorageData = localStorage.getItem('cart');
  let cart = JSON.parse(localStorageData);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == item.id) {
      cart.splice(i, 1);
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  this.props.removeHandler();
}

function updateItemQuantity(quantity) {
  this.setState({ quantity: quantity });
  let localStorageData = localStorage.getItem('cart');
  let cart = JSON.parse(localStorageData);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == this.state.item.id) {
      cart[i].quantity = quantity;
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  this.props.removeHandler();
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  quantity: PropTypes.string,
  price: PropTypes.string,
  message: PropTypes.string,
  image: PropTypes.array,
  deleteProduct: PropTypes.func,
};

export {
  Component as CartItem,
  Component as CartItemComponent,
};
