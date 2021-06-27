import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={3} lg={3} className={styles.columnFooter}>
            <p className={styles.footerTitle}>Learn more</p>
            <Link to="/" className={styles.footerLink}>About us</Link>
            <Link to="/" className={styles.footerLink}>Careers</Link>
            <Link to="/" className={styles.footerLink}>Magazine</Link>
            <Link to="/" className={styles.footerLink}>Desygns</Link>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} className={styles.columnFooter}>
            <p className={styles.footerTitle}>Let us help you</p>
            <Link to="/" className={styles.footerLink}>Contact Us</Link>
            <Link to="/" className={styles.footerLink}>Support</Link>
            <Link to="/" className={styles.footerLink}>Vouchers</Link>
            <Link to="/" className={styles.footerLink}>Installation Service</Link>
            <Link to="/" className={styles.footerLink}>FAQ</Link>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3}></Col>
          <Col xs={12} sm={12} md={3} lg={3} className={styles.columnFooterRight}>
            <p className={styles.footerTitle}>Get in touch!</p>
            <p className={styles.openHours}>Mon. - Fri. 9:00 - 17:00</p>
            <Link to="/" className={styles.footerLink}>239 239 239</Link>
            <Link to="/" className={styles.footerLink}>office@sygns.com</Link>
            <Link to="/" className={styles.footerLink}>support@sygns.com</Link>
          </Col>
        </Row>
        <div className={styles.line}></div>
        <Row>
          <Col className={styles.rights} xs={12} sm={12} md="8">
            Sygns GmbH, All rights reserved.
          </Col>
          <Col className={styles.legal} xs={12} sm={12} md={12}>
            <Link to="/" className={styles.footerLinkSmall}>Terms & Conditions</Link>
            <Link to="/" className={styles.footerLinkSmall}>Privacy</Link>
            <Link to="/" className={styles.footerLinkSmall}>Imprint</Link>
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

export {
  Component as Footer,
  Component as FooterComponent,
};
