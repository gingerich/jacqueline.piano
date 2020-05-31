import React, { Component } from 'react';
import favicon from './assets/img/favicon.ico';
import favico32 from './assets/img/favicon-32x32.png';
import appleTouchIcon from './assets/img/apple-touch-icon.png';

export default class HTML extends Component {
  render() {
    return (
      <html lang="en" className="has-navbar-fixed-top">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <link rel="icon" type="image/png" sizes="32x32" href={favico32} />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
          <link
            rel="mask-icon"
            href="/assets/img/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link
            rel="mask-icon"
            href="/assets/img/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script
            src="https://kit.fontawesome.com/f0a4d11a51.js"
            crossOrigin="anonymous"
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
