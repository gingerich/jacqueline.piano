import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { HTMLContent } from '../components/Content';
import AboutPageTemplate from '../components/AboutPageTemplate';
import Layout from '../components/Layout';
import PageMeta from '../components/PageMeta';

const AboutPage = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PageMeta
        title={post.frontmatter.meta_title}
        description={post.frontmatter.meta_description}
        image={post.frontmatter.background}
        location={location}
      ></PageMeta>
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
