import React from 'react';
import Helmet from 'react-helmet';
import { HTMLContent } from '../Content';
import Offerings from '../Offerings';
import Schedule from '../Schedule';
import Testimonials from '../Testimonials';
import PropTypes from 'prop-types';

const HomePageTemplate = ({
  title,
  subtitle,
  background,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
  schedule,
  pricing,
}) => (
  <>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-dark is-bold is-medium has-background">
      <img className="hero-background is-transparent" src={background} />
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
              <section className="section">
                <div className="has-text-centered">
                  <p class="is-size-4">Check out the FAQ page to learn more</p>
                  <a className="button is-primary" href="/faq">
                    Learn More
                  </a>
                </div>
              </section>
              <article className="article">
                <h2
                  id="schedule"
                  className="has-text-weight-semibold is-size-2"
                >
                  {schedule.title}
                </h2>
                <Schedule description={schedule.text} />
              </article>
              <article className="article">
                <h2 id="pricing" className="has-text-weight-semibold is-size-2">
                  Pricing
                </h2>
                <div className="columns level">
                  <div className="column level-item has-text-centered-tablet">
                    <HTMLContent className="content" content={pricing.text} />
                  </div>
                  <div className="column level-item">
                    <h4 className="is-4">Cancellation Policy</h4>
                    <p className="content">{pricing.cancellation}</p>
                  </div>
                </div>
              </article>
              <h2 className="has-text-weight-semibold is-size-2">
                Testimonials
              </h2>
              <Testimonials testimonials={testimonials} />
            </div>
            <article className="article">
              <div className="hero is-primary columns">
                <div className="hero-body has-text-centered column is-6 is-offset-3">
                  <div className="level">
                    <div className="level-item">
                      <p class="is-size-5 is-spaced">
                        Contact me for more information
                      </p>
                    </div>
                    <div className="level-item">
                      <a
                        className="button is-white is-outlined"
                        href="/contact"
                      >
                        <span class="icon">
                          <i class="fas fa-paper-plane"></i>
                        </span>
                        <span>Contact Me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </>
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
