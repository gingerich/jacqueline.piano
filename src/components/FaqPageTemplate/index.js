import React from 'react';

export default ({ title, faq }) => (
  <>
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        {faq.map((item) => (
          <article className="content article">
            <h3 className="is-3">{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  </>
);
