import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import FAQPageTemplate from '../components/FAQPageTemplate';
import Layout from '../components/Layout';

const FAQPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FAQPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        faq={frontmatter.faq}
      />
    </Layout>
  );
};

FAQPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default FAQPage;

export const faqPageQuery = graphql`
  query FAQPage($id: String!) {
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
