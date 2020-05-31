import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import SearchBox from '../SearchBox';
import config from '../../../config';

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <nav className="navbar is-fixed-top" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img
              className="brand-image"
              src={config.siteLogo}
              alt={config.siteDescription}
              width="28"
              height="28"
            />
            <strong>Jacquie Teaches</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target="navMenu"
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id="navMenu"
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="#schedule">
              Schedule
            </Link>
            <Link className="navbar-item" to="#pricing">
              Pricing
            </Link>
            <Link className="navbar-item" to="/faq">
              FAQ
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
          </div>
          <div className="navbar-end">
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <Link className="button is-primary is-outlined" to="/contact">
                    Contact Me
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
);

export default NavBar;
