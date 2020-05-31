import React from 'react';
import Content from '../Content';
import PropTypes from 'prop-types';

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <section className="hero is-primary is-bold is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="columns level">
              <div className="column is-offset-1">
                <div className="content is-medium">
                  <h1 className="title">{title}</h1>
                </div>
              </div>
              <div className="column">
                <PageContent className="content is-medium" content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
