import React from "react";
import user from "./conan_detective_tbs.jpg";

const ProfPhoto = (props) => {
  return (
    <div>
      <img
        style={{ borderRadius: "100%", width: "400px", height: "400px" }}
        src={user}
        alt="profpic"
      />
    </div>
  );
};

export default ProfPhoto;
