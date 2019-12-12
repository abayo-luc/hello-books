export default [{
  path: '/',
  name: 'Home',
  exact: true
}, {
  path: '/login',
  name: 'Login',
  exact: true
}, {
  path: '/signup',
  name: 'Signup',
  exact: true
}, {
  path: '*',
  name: 'NotFound',
  exact: true
}];
