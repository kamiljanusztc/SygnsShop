import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Success.module.scss';

class Component extends React.Component {

  componentDidMount() {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  render() {
    const { className } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.successAnimation}>
          <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className={styles.checkmark__check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
          <h4>Success!</h4>
          <h6>Your order has been placed</h6>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Success,
  Component as SuccessComponent,
};
