import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextInput = ({ type, icon, ...rest }) => (
  <div className='text-input'>
    <div className='icon'>
      <img src={require(`../../assets/${icon}.png`)} alt='email' />
    </div>
    <input type={type} {...rest} />
  </div>
);

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default TextInput;
