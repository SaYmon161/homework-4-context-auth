import React, { PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  renderHeader = Header => {
    return (
      <header className="header">
        <p className="header__title section-title">Header</p>
        <div className="header__content">
          <Header />
        </div>
      </header>
    );
  };
  renderFooter = Footer => {
    return (
      <footer className="footer">
        <p className="header__title section-title">Footer</p>
        <Footer />;
      </footer>
    );
  };
  render() {
    const { header, footer, children } = this.props;
    return (
      <React.Fragment>
        {header && this.renderHeader(header)}
        <main
          className={`main ${header && 'main--with-header'} ${footer &&
            'main--with-footer'}`}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>
        {footer && this.renderFooter(footer)}
      </React.Fragment>
    );
  }
}

export default Layout;
