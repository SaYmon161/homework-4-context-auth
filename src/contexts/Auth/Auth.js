import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const data = {
  email: 'stu@dent.com',
  password: '123'
};
class AuthProvider extends PureComponent {
  state = {
    isAuthorized: false,
    authorizeError: '',
    email: ''
  };

  authorize = (email, password) => {
    if (email === data.email && password === data.password) {
      this.setState({
        isAuthorized: true,
        authorizeError: '',
        email: data.email
      });
    } else {
      this.setState({ authorizeError: 'Email или пароль введён не верно' });
    }
  };

  logout = () => {
    this.setState({ isAuthorized: false, email: '' });
  };

  getProviderValue = () => {
    const { isAuthorized, authorizeError, email } = this.state;
    console.log(this.authorize);
    return {
      isAuthorized,
      authorize: this.authorize,
      authorizeError,
      logout: this.logout,
      email
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
