import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div>
      <Container>
        <Row>
          <Col xs="12" sm="4" md="3" className={styles.columnFooter}>
            <p className={styles.footerTitle}>Learn more</p>
            <Link className={styles.footerLink}>About us</Link>
            <Link className={styles.footerLink}>Careers</Link>
            <Link className={styles.footerLink}>Magazine</Link>
            <Link className={styles.footerLink}>Desygns</Link>
          </Col>
          <Col xs="12" sm="4" md="3" className={styles.columnFooter}>
            <p className={styles.footerTitle}>Let us help you</p>
            <Link className={styles.footerLink}>Contact Us</Link>
            <Link className={styles.footerLink}>Support</Link>
            <Link className={styles.footerLink}>Vouchers</Link>
            <Link className={styles.footerLink}>Installation Service</Link>
            <Link className={styles.footerLink}>FAQ</Link>
          </Col>
          <Col xs="12" sm="4" md="3"></Col>
          <Col xs="12" sm="4" md="3" className={styles.columnFooterRight}>
            <p className={styles.footerTitle}>Get in touch!</p>
            <p className={styles.openHours}>Mon. - Fri. 9:00 - 17:00</p>
            <Link className={styles.footerLink}>999 999 999</Link>
            <Link className={styles.footerLink}>mail@sygns.com</Link>
            <Link className={styles.footerLink}>mail@sygns.com</Link>
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row>
          <Col className={styles.rights} xs="12" sm="4" md="8">
            Sygns GmbH, All rights reserved.
          </Col>
          <Col className={styles.legal} xs="12" sm="4" md="4">
            <Link className={styles.footerLinkSmall}>Terms & Conditions</Link>
            <Link className={styles.footerLinkSmall}>Privacy</Link>
            <Link className={styles.footerLinkSmall}>Imprint</Link>
          </Col>
        </Row>
      </Container>
    </div>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
