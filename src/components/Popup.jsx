import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountry } from "../Slice/DetailSlice";

const Popup = () => {
  const data = useSelector((store) => store.fetchSlice.data);
  const dispatch = useDispatch();

  console.log("data", data);
  const [selected, setSelected] = useState();
  const countryHandler = (event) => {
    dispatch(setCountry(event.target.value));
    console.log("popup", event.target.value);
  };

  return (
    <div className="flex flex-col w-[70%] mt-[6rem] -mr-40 bg-gray-3 ">
      <div className="flex">
        <h3 className="font-bold">Time Option</h3>
      </div>

      <select onChange={countryHandler} className="flex flex-col mt-2">
        <option value="select">Select TimeZone</option>

        {data &&
          data?.map((location) => (
            <option className="text-black" value={location}>
              {location}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Popup;
