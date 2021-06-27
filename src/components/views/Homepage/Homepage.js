import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import clsx from 'clsx';

import { Row, Col } from 'reactstrap';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

// import { Menu } from '../Menu/Menu';
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
        <div className={styles.home}>
          <Row >
            <Col xs={12} sm={6} md={12} lg={4} className={styles.section}>
              <div className={styles.dealsWrapper}>
                <Carousel className={styles.carousel}/>
              </div>
            </Col>
            <Col xs={12} sm={6} md={12} lg={8} className={styles.section}>
              <div className={styles.bannerWrapper}>
                <Promo className={styles.promo}/>
              </div>
            </Col>
          </Row>
          {/* <Menu/> */}
          <h2 className={styles.products}>Products</h2>
          <Row className={styles.cardContainer}>
            {products.map(product => (
              <Col xs={12} sm={6} md={6} lg={3} className={styles.card} key={product.id ? product.id : uniqid()}>
                <Card className={styles.cardItem}>
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
                        <div className={styles.cta} to="/">See more</div>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fetchProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
