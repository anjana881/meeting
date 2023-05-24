import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <>
      <div className=" m-auto mt-10 w-[35%] p-6 bg-slate-300 font-semibold   text-lg text-red-600 ">
        <h2 className="mb-6">Your event has been cancelled. </h2>

        <p>
          You can Click{" "}
          <span className="text-green-900 mb-4 font-bold ">
            <Link to="/"> &nbsp;HERE &nbsp;</Link>
          </span>
          to schedule your meeting again.
        </p>
        <p> Thank you !</p>
      </div>
    </>
  );
};

export default Cancel;
