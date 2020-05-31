import React from 'react';
import Content from '../Content';
import PropTypes from 'prop-types';

const AboutPageTemplate = ({
  title,
  background,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="hero is-dark is-bold is-fullheight-with-navbar has-background">
      <img className="hero-background is-transparent" src={background} />
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
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
