import React from 'react';
import Helmet from 'react-helmet';
import Offerings from '../Offerings';
import Schedule from '../Schedule';
import Testimonials from '../Testimonials';
import PropTypes from 'prop-types';

const HomePageTemplate = ({
  title,
  subtitle,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  schedule,
}) => (
  <React.Fragment>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-dark is-bold is-medium has-background">
      <img
        className="hero-background is-transparent"
        src={'/img/piano-hands.jpg'}
      />
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title is-1">{title}</h1>
                <h3 className="subtitle is-3">{subtitle}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container article">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
              <Offerings gridItems={offerings.blurbs} />
              <article className="article">
                <h2
                  id="schedule"
                  className="has-text-weight-semibold is-size-2"
                >
                  Schedule
                </h2>
                <Schedule description={schedule} />
              </article>
              <article className="article">
                <h2 id="pricing" className="has-text-weight-semibold is-size-2">
                  Pricing
                </h2>
                <div className="content">
                  <p className="has-text-weight-bold is-size-5">
                    Half hour lesson: $17
                  </p>
                  <p>
                    Travel fee (when teaching in student’s home): $5
                    <br />
                    <small className="is-size-7">
                      <i>*Travel fee is per trip not per student*</i>
                    </small>
                  </p>
                  <p>Payment accepted by cash, cheque, or e-transfer.</p>
                </div>
                <h4 className="is-4">Cancellation Policy</h4>
                <p className="content">
                  Every three months, students are allowed one lesson
                  cancellation. Beyond this, the full amount of the lesson will
                  be charged. If you would like to reschedule your lesson,
                  please contact me in advance -- preferably the week before, or
                  minimum two days in advance. Vacation time is excluded from
                  this policy, as long as notice of vacation is received minimum
                  two weeks in advance. Lessons on holiday Mondays or Fridays
                  are also excluded from this and negotiable for each situation.
                </p>
              </article>
              <h2 className="has-text-weight-semibold is-size-2">
                Testimonials
              </h2>
              <Testimonials testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,
};

export default HomePageTemplate;
