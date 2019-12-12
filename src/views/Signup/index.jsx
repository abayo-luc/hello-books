import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInputs';
import '../Login/auth.scss';
import CustomButton from '../../components/Buttons';
import Footer from '../../components/Footer';
import TopNav from '../../components/Navs/TopNav';
const SignUp = () => {
  const [authState, setAuthState] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleOnChange = e => {
    setAuthState({
      ...authState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='auth-page'>
      <TopNav />
      <div className='left-container' />
      <div className='right-container'>
        <form className='auth-form' onSubmit={handleSubmit} id='sign-up-form'>
          <TextInput
            type='text'
            icon='user'
            placeholder='Name'
            name='name'
            value={authState.name}
            onChange={handleOnChange}
            required
          />
          <TextInput
            type='email'
            icon='email'
            name='email'
            placeholder='Email'
            value={authState.email}
            onChange={handleOnChange}
            required
          />
          <TextInput
            type='password'
            icon='lock'
            name='password'
            placeholder='Password'
            value={authState.password}
            onChange={handleOnChange}
            required
          />
          <CustomButton title='Sign up' type='submit' className='btn-lg' />
        </form>
        <div className='auth-link'>
          <Link to='/login' className='link' id='login-link'>
            Already have an account? Login
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
