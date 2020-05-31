import React from 'react';

export default ({ faq }) => (
  <>
    <section className="hero is-info is-bol">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">FAQ</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        {faq.map(({ title, text }) => (
          <article className="content article">
            <h3 className="is-3">{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);
