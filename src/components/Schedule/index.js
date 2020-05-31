import React from 'react';

export default ({ description }) => (
  <div className="container">
    <div className="content">
      <p>{description}</p>
    </div>
    <div className="scroll-containr">
      <div className="tile is-ancestor">
        <div className="tile is-parent"></div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <p className="title is-5">Monday</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <p className="title is-5">Tuesday</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <p className="title is-5">Wednesday</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <p className="title is-5">Thursday</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child">
            <p className="title is-5">Friday</p>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <article className="tile is-child">
            <p className="title is-5">Morning</p>
            <p className="subtitle is-6">(8am - 12pm)</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-info has-text-white has-text-weight-medium">
            <p className="content">West & South Kitchener</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-info has-text-white has-text-weight-medium">
            <p className="content">East & South Kitchener</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-link has-text-white has-text-weight-medium">
            <p className="content">In home</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-info has-text-white has-text-weight-medium">
            <p className="content">North Waterloo</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-link has-text-white has-text-weight-medium">
            <p className="content">In home</p>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-2">
          <article className="tile is-child">
            <p className="title is-5">Afternoon</p>
            <p className="subtitle is-6">(12pm - 6pm)</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box box has-background-info has-text-white has-text-weight-medium">
            <p className="content">West Waterloo</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box box has-background-info has-text-white has-text-weight-medium">
            <p className="content">East Waterloo & Kitchener</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box box has-background-link has-text-white has-text-weight-medium">
            <p className="content">In home</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box box has-background-info has-text-white has-text-weight-medium">
            <p className="content">North Waterloo</p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box has-background-link has-text-white has-text-weight-medium">
            <p className="content">In home</p>
          </article>
        </div>
      </div>
    </div>
  </div>
);
