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
import Brand from '../../components/Brand';

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
  if (props.success && props.isSubmitting) {
    return <Loading />;
  }
  return (
    <div className='auth-page'>
      <div className='header'>
        <Brand />
        <div className='right-content hide-sm'>
          <p>Don't have an account?</p>
          <Link to='/signup' className='btn'>
            Sign up
          </Link>
        </div>
      </div>
      <div className='left-container' />
      <div className='right-container'>
        <form className='auth-form' onSubmit={handleSubmit} id='sign-up-form'>
          <TextInputs
            type='email'
            icon='email'
            placeholder='Email'
            value={authState.email}
            onChange={e =>
              setAuthState({ ...authState, email: e.target.value })}
          />
          <TextInputs
            type='password'
            icon='lock'
            placeholder='Password'
            value={authState.password}
            onChange={e =>
              setAuthState({ ...authState, password: e.target.value })}
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
      <div className='footer'>
        <p>
          Designed and built with all the love in the world by <b>Luc Abayo</b>
        </p>
      </div>
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
