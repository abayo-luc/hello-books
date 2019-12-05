import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
const CustomButton = ({ title, ...props }) => (
  <div className='custom-button'>
    <button {...props}> {title}</button>
  </div>
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired
};
export default CustomButton;
