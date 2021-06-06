import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

class Component extends React.Component {

  render() {
    const {className} = this.props;


    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.notFound}>
          <h2>404</h2>
          <p>Page not found. Return to <Link className={styles.homeLink} to="/">Homepage</Link> </p>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
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
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
