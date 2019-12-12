import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import TextInputs from '../../components/TextInputs';
import authActions from '../../store/actions/auth';
import { useToasts } from 'react-toast-notifications';
import './auth.scss';
import CustomButton from '../../components/Buttons';
import Footer from '../../components/Footer';
import TopNav from '../../components/Navs/TopNav';

export const Login = ({ handleLogin, ...props }) => {
  const history = useHistory();
  const [authState, setAuthState] = useState({ email: '', password: '' });
  const { addToast } = useToasts();
  const handleError = (content, options) => addToast(content, options);
  const handleNavigation = path => history.replace(path);
  const handleSubmit = event => {
    const { email, password } = authState;
    handleLogin({ email, password }, handleError, handleNavigation);
    event.preventDefault();
  };
  const handleOnChange = e => {
    setAuthState({
      ...authState,
      [e.target.name]: e.target.value
    });
  };
  if (props.success && props.isSubmitting) {
    return <Loading />;
  }
  return (
    <div className='auth-page'>
      <TopNav>
        <div className='right-content hide-sm'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='btn'>
            Sign up
          </Link>
        </div>
      </TopNav>
      <div className='left-container' />
      <div className='right-container'>
        <form className='auth-form' onSubmit={handleSubmit} id='login-form'>
          <TextInputs
            type='email'
            icon='email'
            placeholder='Email'
            name='email'
            value={authState.email}
            onChange={handleOnChange}
            required
          />
          <TextInputs
            type='password'
            icon='lock'
            placeholder='Password'
            name='password'
            value={authState.password}
            onChange={handleOnChange}
            required
          />
          <CustomButton
            title='Login'
            type='submit'
            className='btn-lg'
            disabled={props.isSubmitting}
          />
        </form>
        <div className='auth-link'>
          <Link to='password/reset' className='link' id='sign-up-link'>
            Forgot password?
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  ...auth
});
Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired
};
export default connect(mapStateToProps, { ...authActions })(Login);
