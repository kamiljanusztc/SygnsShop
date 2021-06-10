import React from 'react';
import PropTypes from 'prop-types';

import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

class Component extends React.Component {

  render() {
    const {className} = this.props;

    return(
      <div className={clsx(className, styles.root)}>

        <Navbar className={styles.navBar} expand="lg">
          <Navbar.Brand href="/" className={styles.sygnsHome}>
            <img className={styles.logo} src="/images/SygnsLogo.svg" alt="img"/>
            <p className={styles.shop}>Shop</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto"
            >
              <Link className={styles.link} to="/">Products</Link>
              <Link className={styles.link} to="/">
                <FontAwesomeIcon icon={faUser} className={styles.icon}/>
                <p>Login</p>
              </Link>
              <Link className={styles.link} to="/">
                <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
                <p>Cart</p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}


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
