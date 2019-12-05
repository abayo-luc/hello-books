import React from 'react';
import Icon from '../assets/logo-w.png';
import './brand.scss';
export default () => (
  <div className='brand' id='app-brand'>
    <img src={Icon} className='icon' alt='book' />
    <h1>
      <span>HelloBooks</span>
    </h1>
  </div>
);
