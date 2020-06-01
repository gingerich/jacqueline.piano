import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomePageTemplate from '../components/HomePageTemplate';
import Layout from '../components/Layout';

const HomePage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.meta_title}</title>
        <meta name="description" content={frontmatter.meta_description} />
        <meta
          property="og:image"
          content={`${location.origin}${frontmatter.background}`}
        ></meta>
      </Helmet>
      <HomePageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        background={frontmatter.background}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
        schedule={frontmatter.schedule}
        pricing={frontmatter.pricing}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        background
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            icon
            text
          }
        }
        schedule {
          title
          text
        }
        pricing {
          text
          cancellation
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;
