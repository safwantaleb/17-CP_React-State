import React from "react";
import PropTypes from "prop-types";

const Name = (props) => {
  return (
    <div>
      <h1
        style={{
          color: "blue",
          boxShadow: "0 5px 8px ",
          borderRadius: "15px",
          textAlign: "center",
          padding: "10px 15px",
        }}
      >
        {props.fullName}
      </h1>
    </div>
  );
};

Name.propTypes = {
  fullName: PropTypes.string,
};

export default Name;
