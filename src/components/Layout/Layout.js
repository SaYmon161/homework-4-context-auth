import React, { PureComponent } from 'react';
import './Layout.css';

class Layout extends PureComponent {
  render() {
    const { header, footer, children } = this.props;
    return (
      <React.Fragment>
        {header}
        {children}
        {footer}
      </React.Fragment>
    );
  }
}

export default Layout;
