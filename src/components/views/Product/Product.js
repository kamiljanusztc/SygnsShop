import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getOne, fetchOneProductFromAPI, addToCart, getLoadingState } from '../../../redux/productsRedux';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Product.module.scss';


class Component extends React.Component {

  state = {
    // cart: {
    //   _id: this.props.product._id,
    //   title: this.props.product.title,
    //   content: this.props.product.content,
    //   price: this.props.product.price,
    //   image: this.props.product.image,
    //   quantity: 1,
    //   message: '',
    // },
    // product: {
    //   _id: this.props.product._id,
    //   title: this.props.product.title,
    //   content: this.props.product.content,
    //   price: this.props.product.price,
    //   image: this.props.product.image,
    //   quantity: 1,
    //   message: '',
    // },
  };

  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
  }

  render() {
    const {className, product} = this.props;
    console.log('product', product);

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-md-6">
              <div>
                <Carousel
                  // activeIndex={index} onSelect={handleSelect}
                >
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/products/hot-deal.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/products/hot-deal.jpg"
                      alt="First slide"
                    />
                  </Carousel.Item><Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="/images/products/hot-deal.jpg"
                      alt="First slide"
                    />
                    {/* {product.image} */}
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <h4>
                  {/* {product.title} */}

                </h4>
                <p>
                  With our Letter Edition you can throw together your message in neon by ordering separate neon letters
                  {/* {product.content} */}
                </p>
                {/* Quantity: {product.qunatity} */}
                <input type="number" id="quantity" name="quantity" min="1" max="5"/>
                <p className={styles.cardItem}>
                € Price
                  {/* {product.price} */}
                </p>
              </div>
              <Link className={styles.addToCart} to="/cart">Add to cart</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  props: PropTypes.object,
  match: PropTypes.object,
  fetchProduct: PropTypes.func,
  addToCart: PropTypes.func,
  loading: PropTypes.object,
};

const mapStateToProps = (state) => ({
  product: getOne(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  // fetchOneProduct: () => dispatch(fetchProduct(props.match.params.id)),
  fetchProduct: () => dispatch(fetchOneProductFromAPI(props.match.params.id)),
  addToCart: (value) => dispatch(addToCart(value)),
});

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
