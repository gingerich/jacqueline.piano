import React from "react";
import PropTypes from "prop-types";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.image} className="column is-6">
        <div className="content">
          <p className="has-text-centered">
            {/* <img alt="" src={item.image} /> */}
            <span class="icon is-size-1">
              <i class="fas fa-home"></i>
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
