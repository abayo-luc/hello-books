import React from 'react';
import { Link } from 'react-router-dom';
import TextInputs from '../../components/TextInputs';
import './auth.scss';
import CustomButton from '../../components/Buttons';
import Brand from '../../components/Brand';
export default () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='auth-page'>
      <div className='header'>
        <Brand />
        <div className='right-content'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='btn'>
            Sign up
          </Link>
        </div>
      </div>
      <div className='left-container' />
      <div className='right-container'>
        <form className='auth-form' onSubmit={handleSubmit}>
          <TextInputs type='email' icon='email' placeholder='Email' />
          <TextInputs type='password' icon='lock' placeholder='Password' />
          <CustomButton title='Login' type='submit' className='btn-lg' />
        </form>
        <div className='auth-link'>
          <Link to='password/reset' className='link'>
            Forgot password?
          </Link>
        </div>
      </div>
      <div className='footer'>
        <p>
          Designed and built with all the love in the world by <b>Luc Abayo</b>
        </p>
      </div>
    </div>
  );
};
