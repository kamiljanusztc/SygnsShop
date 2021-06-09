import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './Menu.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Navbar className={styles.navBar} expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          // className="ml-auto"
          className={styles.menuWrapper}
        >
          <Link className={styles.product} to="/">Neons</Link>
          <Link className={styles.product} to="/">LED Neons</Link>
          <Link className={styles.product} to="/">2D Letters</Link>
          <Link className={styles.product} to="/">3D Letters</Link>
          <Link className={styles.product} to="/">Lightboxes</Link>
          <Link className={styles.product} to="/">Components</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
  Component as Menu,
  // Container as Menu,
  Component as MenuComponent,
};
