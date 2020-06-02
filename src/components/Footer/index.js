import React from 'react';
import config from '../../../config';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{config.copyright}</p>
          <p>
            <small>
              Powered by <a href="https://www.gatsbyjs.org">Gatsby</a> and{' '}
              <a href="https://www.netlifycms.org">Netlify CMS</a> |{' '}
              <a href="https://github.com/gingerich/jacqueline.piano">
                Github Repository
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
