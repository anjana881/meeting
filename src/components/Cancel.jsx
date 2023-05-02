import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <>
      <div className="cancel flex justify-center  flex-col text-lg text-red-600 ">
        <h2>Your event has been cancelled</h2>

        <p>
          You can <Link to="/">schedule your meeting </Link> again. Thank you !
        </p>
      </div>
    </>
  );
};

export default Cancel;
