import React from "react";
import PropTypes from "prop-types";

const Profession = (props) => {
  return (
    <div>
      <p style={{ color: "black", fontFamily: "sans-serif", fontSize: "24px" }}>
        <em>
          <strong> Profession : </strong>
        </em>
        {props.profession}
      </p>
    </div>
  );
};

Profession.propTypes = {
  profession: PropTypes.string,
};

export default Profession;
