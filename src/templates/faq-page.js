import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import FaqPageTemplate from '../components/FaqPageTemplate';
import Layout from '../components/Layout';

const FaqPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FaqPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        faq={frontmatter.faq}
      />
    </Layout>
  );
};

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FaqPage;

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        faq {
          title
          text
        }
      }
    }
  }
`;
