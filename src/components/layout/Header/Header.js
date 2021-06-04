import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <Button href="https://www.sygns.com/"
          // onClick={preventDefault}
          className={styles.sygnsHome}
        >
          <img className={styles.logo} src="/images/SygnsLogo.svg" alt="img"/>
        </Button>
        <Link to="/"
          // onClick={preventDefault}
          className={styles.shop}
        >
          SYGNS Shop
        </Link>
        <Link
          href="https://www.sygns.com/cart"
          className={styles.cart}
        >
          <ShoppingCartOutlinedIcon href="https://www.sygns.com/cart"/>
        </Link>
      </Toolbar>
    </AppBar>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
