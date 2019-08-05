import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button';
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, logout, email }) => (
          <header className="header">
            <p className="header__title section-title">Header</p>
            <div className="header__content">
              {isAuthorized && (
                <div className="header-menu">
                  <p className="header-menu__email header-email t-header-email">
                    {email}
                  </p>
                  <Button
                    onClick={logout}
                    className="header-menu__button t-logout"
                  >
                    Выйти
                  </Button>
                </div>
              )}
            </div>
          </header>
        )}
      </AuthConsumer>
    );
  }
}

export default Header;
