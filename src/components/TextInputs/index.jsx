import React from 'react';

export default ({ type, ...rest }) => (
  <div className='text-input'>
    <input type={type} {...rest} />
  </div>
);
