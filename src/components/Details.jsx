import React from "react";
import { BiTime } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "../assets/logo192.png";
import DetailForm from "./DetailForm";

const Details = () => {
  const { id } = useParams();
  const date = useSelector((state) => state.dateSlice.date);
  console.log(date);
  const time = useSelector((state) => state.dateSlice.time);
  console.log(time);

  const country = useSelector((state) => state.detailSlice.country);
  console.log("first", country);
  const { pathDetail } = useParams();
  return (
    <div className="w-[60%] m-auto mt-4 border rounded-xl -800 flex justify-center items-center mb-6 shadow-md shadow-slate-500  ">
      <div className="w-[40%] bg-white rounded-xl flex  flex-col  border-r  p-6">
        <img src={logo} className="mb-4 h-12 w-12 " alt="logo" />
        <h3 className="mb-4">
          {pathDetail === "30minute" ? "30 Min meeting" : "15 min meeting"}
        </h3>
        <div className="flex items-center mb-4 ">
          <i className="mr-2">
            <FaVideo />
          </i>
          <p>call video</p>
        </div>
        <div className="flex items-center mb-4 ">
          <i className="mr-2">
            <BiTime />
          </i>
          <p>
            {pathDetail === "30minute" ? "30 Min meeting" : "15 min meeting"}
          </p>
        </div>
        <div className="flex flex-col  ">
          <div className="flex  mb-4  items-center">
            <i className="mr-2 text-lg">
              <FcViewDetails />
            </i>
            <p className="mr-2 ">Details</p>
          </div>
          <p className="mb-4 font-bold">Date:{date}</p>

          <p className="mb-3 font-bold"> Time:{time}</p>

          <p className="mb-3 font-bold"> Location:{country}</p>
        </div>
      </div>

      <div className="w-[60%] ml-2 p-6 ">
        <DetailForm />
      </div>
    </div>
  );
};
export default Details;
