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
      this.setState({ isAuthorized: true });
    }
  };

  getProviderValue = () => {
    const { isAuthorized, authorizeError, email } = this.state;
    return {
      isAuthorized,
      authorize: this.authorize,
      authorizeError,
      email
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
