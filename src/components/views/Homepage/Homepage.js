import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import clsx from 'clsx';
// import uniqid from 'uniqid';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import { Menu } from '../Menu/Menu';
import { Carousel } from '../../features/Carousel/Carousel';
import { Promo } from '../../features/Promo/Promo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  getAll,
  fetchProductsFromAPI,
  getLoadingState,
} from '../../../redux/productsRedux.js';

import styles from './Homepage.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const {className, products} = this.props;

    return(

      <div className={clsx(className, styles.root)}>

        <div className={styles.banner}>
          <div className={styles.title}>
            <h1>Welcome to Sygns store.</h1>
            <h3>Choose a product or <Link className={styles.configure} to="/">configure</Link> your dream sign!</h3>
          </div>
        </div>

        {/* <div className={styles.dealsWrapper}>
          <div className={styles.deal}>
            <Carousel className={styles.carousel}/>
          </div>
          <div className={styles.deal}>
            <Promo className={styles.promo}/>
          </div>
          <div className={styles.deal}>
            <Promo className={styles.promo}/>
          </div>
        </div> */}

        <div className={styles.home}>
          <div
            className="{styles.promote}"
          >
            <div className='row'>
              <div className='col-md-4'>
                <div className={styles.dealsWrapper}>
                  <Carousel className={styles.carousel}/>
                </div>
              </div>
              <div className='col-md-8'>
                <div className={styles.bannerWrapper}>
                  <Promo className={styles.promo}/>
                </div>
              </div>
            </div>
          </div>
          <Menu/>
          <div className={styles.card}>
            {products.map(product => (
              <Card key={product.id ? product.id : uniqid()} className={styles.cardItem}>
                <Link
                  to={{ pathname:`/product/${product.id}`}}
                  className={styles.cardLink}>
                  <CardActionArea>
                    <CardMedia
                      className={styles.image}
                      image={product.image[0]}
                      component="img"
                    />
                    <CardContent>
                      <Typography className={styles.title} gutterBottom variant="h6" component="h2">
                        {product.title}
                      </Typography>
                      <Typography className={styles.content} variant="body2" color="textSecondary" component="p">
                        {product.content}
                      </Typography>
                      <Typography className={styles.price} variant="body2" component="p">
                        {product.price}€
                      </Typography>
                      <Link className={styles.cta} to="/">See more</Link>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // products: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number,
  //     title: PropTypes.string,
  //     content: PropTypes.string,
  //     price: PropTypes.number,
  //     image: PropTypes.string,
  //   })
  // ),
  fetchProducts: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const mapStateToProps = (state) => ({
  products: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
});

// const mapDispatchToProps = dispatch => ({
//   fetchPublishedPosts: () => dispatch(fetchPublished()),
// });

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
// const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
