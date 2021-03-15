import React from "react";
import PropTypes from "prop-types";

const Bio = (props) => {
  return (
    <div>
      <p style={{ color: "black", fontFamily: "sans-serif", fontSize: "22px" }}>
        <em>
          <strong> Bio : </strong>
        </em>
        {props.bio}
      </p>
    </div>
  );
};

Bio.propTypes = {
  bio: PropTypes.string,
};

export default Bio;
