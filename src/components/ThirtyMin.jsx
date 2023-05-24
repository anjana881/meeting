import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiTime } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setData } from "../Slice/FetchSlice";
import logo from "../assets/logo192.png";
import Calendar from "./Calendar";
import Popup from "./Popup";
import Time from "./Time";

const ThirtyMin = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const handlePopup = () => {
    setShowPopup(true);
  };

  const date = useSelector((store) => store.dateSlice.date);
  const time = useSelector((store) => store.dateSlice.time);

  useEffect(() => {
    axios.get("http://worldtimeapi.org/api/timezone").then((res) => {
      dispatch(setData(res.data));
      console.log("data", res.data);
    }, []);
  });

  return (
    <div className="card w-[70%] h-[420px] m-auto mt-16   bg-[#bec3c7]  text-black flex">
      <div className="left-bar border-r-2  p-8 w-[30%] flex flex-col">
        <img src={logo} className="mb-4 h-12 w-12 " alt="logo" />
        <h3 className="mb-4">
          {" "}
          {id === "30minute" ? "30 Min meeting" : "15 min meeting"}
        </h3>
        <div className="flex items-center mb-4 ">
          <i className="mr-2">
            <FaVideo />
          </i>
          <p>call video</p>
        </div>
        <div className="flex items-center mb-2 ">
          <i className="mr-2">
            <BiTime />
          </i>
          <p>{id === "30minute" ? "30 Min meeting" : "15 Min Meeting"}</p>
        </div>
        <div onClick={handlePopup} className="flex items-center mb-4 ">
          {showPopup && <Popup />}
          {/* {<Popup />} */}
          <i className="mr-2">
            <BsGlobe />
          </i>
          <p className="">Select Location</p>
          <i className="">
            <MdArrowDropDown />
          </i>
        </div>
      </div>
      <div className="mid-bar w-[50%] flex flex-col items-center p-4 border-r-2 ">
        <Calendar />
      </div>
      {/* {selectedDate && <p>You selected: {selectedDate.toLocaleDateString()}</p>} */}

      <div>{date && <Time />}</div>
    </div>
  );
};

export default ThirtyMin;
