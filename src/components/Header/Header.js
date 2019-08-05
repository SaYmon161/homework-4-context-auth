import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        <header className="header">
          <p className="header__title section-title">Header</p>
          <div className="header__content" />
        </header>
      </AuthConsumer>
    );
  }
}

export default Header;
