import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';
import AboutPageTemplate from '../components/AboutPageTemplate';
import Layout from '../components/Layout';

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name="description" content={post.frontmatter.meta_description} />
        <meta
          property="og:image"
          content={`${location.origin}${post.frontmatter.background}`}
        ></meta>
      </Helmet>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        background={post.frontmatter.background}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        background
        meta_title
        meta_description
      }
    }
  }
`;
