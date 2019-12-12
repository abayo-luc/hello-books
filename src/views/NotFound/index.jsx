import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
export default () => {
  const history = useHistory();
  return (
    <div id='not-found-page'>
      <div className='content'>
        <h3>
          <center id='not-found-msg'>
            Oh no! <br />
            it looks like this page was wiped out by Thanos
          </center>
        </h3>
        <button
          onClick={() => history.goBack()}
          className='btn'
          id='go-back-btn'
        >
          Back Home
        </button>
      </div>
    </div>
  );
};
