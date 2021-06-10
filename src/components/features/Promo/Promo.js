import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Promo.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>

    <div className={styles.promoWrapper}>
      <div className={styles.promo}>
        <h4>New moss palette available now!</h4>
        <p>Contact us for more information</p>
      </div>
      <div
        className={styles.promoImage}
      />
    </div>

  </div>
);

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
  Component as Promo,
  // Container as Promo,
  Component as PromoComponent,
};
