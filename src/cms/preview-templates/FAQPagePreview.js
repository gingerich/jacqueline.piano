import React from 'react';
import PropTypes from 'prop-types';
import FAQPageTemplate from '../../components/FAQPageTemplate';

const FAQPagePreview = ({ entry, getAsset }) => {
  const entryFAQ = entry.getIn(['data', 'faq']);
  const faq = entryFAQ ? entryFAQ.toJS() : [];
  return (
    <FAQPageTemplate
      title={entry.getIn(['data', 'title'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      faq={faq}
    />
  );
};

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default FAQPagePreview;
