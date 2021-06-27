/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Row, Col } from 'reactstrap';

import styles from './CartItem.module.scss';
// import { parse } from '@fortawesome/fontawesome-svg-core';

const Component = ({className, item}) => {

  // componentDidMount() {
  //   this.setState({
  //   })
  // };

  return (
    <div className={clsx(className, styles.root)}>
      <div>
        {/* { cartItems.length === 0 && <div>Cart is empty</div>} */}
      </div>
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
              <input className={styles.qty} type="number" id="quantity" name="quantity" min="1" max="99"
                value={item.quantity}
              />
            </Col>
            <Col xs={12} sm={12} md={2}>
              <p>
                Price: {item.price * item.quantity} €
              </p>
            </Col>
            <Col xs={12} sm={12} md={2}>
              <input className={styles.message} type="text" id="lname" placeholder="Add message" name="lname"/>
              {item.message}
            </Col>
            <Col xs={12} sm={12} md={2}>
              <DeleteOutlinedIcon  className={styles.remove}/>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );

};

// function delete item)
// {
// pobierz z localstorege
// JSON>parse
// usuwamy z tablicy
// JSON.stringify
// setStorage
// }

// const removeFromCart = () => {
//   let localStorageData = localStorage.getItem('cart');
//   let cart = JSON.parse(localStorageData);

//   var json = JSON.parse(localStorage["cart"]);
//   for (i=0; i < x; i++){
//     if (json.products.[i].id == id){
//       json.splice(i,1);
//     }
//   }
// };

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

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartItem,
  // Container as CartItem,
  Component as CartItemComponent,
};


