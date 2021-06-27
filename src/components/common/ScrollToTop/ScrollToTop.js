import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Component = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as ScrollToTop,
  Component as ScrollToTopComponent,
};
