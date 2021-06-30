import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOne, fetchOneProductFromAPI, getLoadingState } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Product.module.scss';

class Component extends React.Component {

  state = {
    quantity: 1,
    cart: {
      _id: this.props.product._id,
      title: this.props.product.title,
      content: this.props.product.content,
      price: this.props.product.price,
      image: this.props.product.image[0],
      qty: 1,
      message: '',
    },
    product: {
      _id: this.props.product._id,
      title: this.props.product.title,
      content: this.props.product.content,
      price: this.props.product.price,
      image: this.props.product.image,
      quantity: 1,
      message: '',
    },
  };

  placeInCart = (event) => {
    const { cart } = this.state;
    const { addToCart } = this.props;

    addToCart(cart);
  };

  componentDidMount() {
    const { fetchProduct } = this.props;
    console.log(this.props.match.params.id);
    fetchProduct();
  }

  render() {

    const {className, product } = this.props;
    console.log('product', product);

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div>
                <Carousel
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product.image[0]}
                      alt={product.title}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product.image[1]}
                      alt={product.title}
                    />
                  </Carousel.Item><Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product.image[2]}
                      alt={product.title}
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className={styles.productDescription}>
                <h4>
                  {product.title}
                </h4>
                <p>
                  {product.content}
                </p>
                Quantity:
                <input value={this.state.quantity} onChange={(env)=>this.setState({quantity: env.target.value})} className={styles.qty} type="number" id="quantity" name="quantity" min="1" max="5"/>
                <p className={styles.cardItem}>
                  {product.price*this.state.quantity} €
                </p>
              </div>
              <Link className={styles.addToCart}
                onClick={()=>addToTheCart(product, this.state.quantity)}
                to='/cart'
              >Add to cart</Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const addToTheCart = (product, quantity) =>{
  product.quantity = quantity;
  let localStorageData = localStorage.getItem('cart');
  let cart = JSON.parse(localStorageData);
  if(cart == undefined) cart=[];
  cart.push(product);
  console.log('cart', cart);
  console.log('localStorageData', localStorageData);
  localStorage.setItem('cart', JSON.stringify(cart));
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  props: PropTypes.object,
  match: PropTypes.object,
  fetchProduct: PropTypes.func,
  addToCart: PropTypes.func,
  loading: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  product: getOne(state, props.match.params.id),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchProduct: () => dispatch(fetchOneProductFromAPI(props.match.params.id)),
  addToCart: (value, qty) => dispatch(addToCart(value, qty)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
