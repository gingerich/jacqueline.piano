import React from 'react';
import PropTypes from 'prop-types';
import HomePageTemplate from '../../components/HomePageTemplate';

const HomePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs']);
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

  const entryTestimonials = entry.getIn(['data', 'testimonials']);
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : [];

  const entrySchedule = entry.getIn(['data', 'schedule']);
  const schedule = entrySchedule ? entrySchedule.toJS() : {};

  const entryPricing = entry.getIn(['data', 'pricing']);
  const pricing = entryPricing ? entryPricing.toJS() : {};

  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      background={entry.getIn(['data', 'background'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      offerings={{ blurbs }}
      testimonials={testimonials}
      schedule={schedule}
      pricing={pricing}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default HomePagePreview;
