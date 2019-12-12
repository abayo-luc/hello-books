import React from 'react';
import PropTypes from 'prop-types';
import Brand from '../Brand';

const TopNav = ({ children }) => {
  return (
    <div className='header'>
      <Brand />
      {children}
    </div>
  );
};

TopNav.propTypes = {
  children: PropTypes.element
};
export default TopNav;
