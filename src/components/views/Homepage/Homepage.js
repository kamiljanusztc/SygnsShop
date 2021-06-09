import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
// import uniqid from 'uniqid';

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { Menu } from '../Menu/Menu';
import { getAll } from '../../../redux/productsRedux';
import { Carousel } from '../../features/Carousel/Carousel';
import { Promo } from '../../features/Promo/Promo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Homepage.module.scss';

class Component extends React.Component {

  render() {
    const {className, products} = this.props;

    return(

      <div className={clsx(className, styles.root)}>

        <div className={styles.title}>
          <h1>Welcome to Sygns store.</h1>
          <h3>Choose a product or configure your dream sign!</h3>
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

        <div
          className={styles.promote}
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
            <Card key={product._id} className={styles.cardItem}>
              <Link to={`/product/${product._id}`} className={styles.cardLink}>
                <CardActionArea>
                  <CardMedia
                    className={styles.image}
                    image={product.image}
                    component="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {product.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Link>
            </Card>
          ))}
        </div>

        <div>
          <h4>Learn more</h4>
          <p>Download our catalogue</p>
        </div>
        <div>
          <h4>Questions</h4>
          <p>Feel free to ask us</p>
        </div>
        <div>
          <h4>Get free preview</h4>
          <p>We'll help you with configure your sign</p>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  // products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ),
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchPublishedPosts: () => dispatch(fetchPublished()),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);
const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
