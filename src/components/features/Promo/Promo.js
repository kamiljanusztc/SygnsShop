import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

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

export {
  Component as Promo,
  Component as PromoComponent,
};
