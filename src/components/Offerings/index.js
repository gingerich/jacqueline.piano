import React from 'react';
import PropTypes from 'prop-types';

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline article">
    {gridItems.map((item) => (
      <div key={item.image} className="column is-4">
        <div className="content has-text-centered">
          <p>
            {/* <img alt="" src={item.image} /> */}
            <span className="icon is-large">
              <i className={`fas fa-3x ${item.icon}`}></i>
            </span>
          </p>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Offerings;
