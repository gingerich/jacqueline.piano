import React from 'react';
import Helmet from 'react-helmet';

export default ({ title, description, image, location }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" content={title}></meta>
    <meta name="description" content={description} />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={location.href} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${location.origin}${image}`} />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={location.href} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={`${location.origin}${image}`} />
  </Helmet>
);
