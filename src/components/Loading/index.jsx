import React from 'react';
import './styles.scss';

export default () => (
  <div className='center loading-component'>
    <div className='lds-ellipsis'>
      <div> </div>
      <div /> <div> </div>
      <div />
    </div>
  </div>
);
