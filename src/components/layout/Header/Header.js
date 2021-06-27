import React from 'react';
import PropTypes from 'prop-types';

import {Navbar, Nav} from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

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
              <Link className={styles.link} to="/"><p>Products</p></Link>
              <Link className={styles.link} to="/"
              >
                <PersonOutlineOutlinedIcon className={styles.iconLogin}/>
                <p>Login</p>
              </Link>
              <Link className={styles.link} to="/cart">
                <ShoppingCartOutlinedIcon className={styles.iconCart}/>
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

export {
  Component as Header,
  Component as HeaderComponent,
};
