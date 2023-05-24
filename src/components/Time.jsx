import { useSelector, useDispatch } from "react-redux";

import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import "moment/locale/en-gb";
import "moment-timezone/builds/moment-timezone-with-data";

import { useNavigate, useParams } from "react-router-dom";
import { setTime } from "../Slice/DateSlice";

const Time = () => {
  const [filteredTimes, setFilteredTimes] = useState([]);

  const date = useSelector((store) => store.dateSlice.date);

  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleItemClick = (item) => {
    setSelectedItem(item);
    dispatch(setTime(item));
    {
      {
        id === "30minute" && navigate("/details/30minute");
      }
    }
    {
      {
        id === "15minute" && navigate("/details/15minute");
      }
    }
  };

  console.log("selected item", selectedItem);
  const location = useSelector((store) => store.detailSlice.country);
  useEffect(() => {
    if (location) {
      const now = moment().tz(location);
      const startTime = moment()
        .add(1, "hour")
        .tz(location)
        .set({ hour: 10, minute: 0, second: 0, millisecond: 0 });
      const endTime = moment()
        .add(1, "hour")
        .tz(location)
        .set({ hour: 16, minute: 59, second: 0, millisecond: 0 });
      const filteredTimes = [];

      while (startTime.isSameOrBefore(endTime)) {
        if (startTime.isSameOrAfter(now)) {
          const twelveHourFormat = startTime.format("h:mm a");
          const twentyFourFormat = startTime.format("HH:mm");

          filteredTimes.push({
            twelveHour: twelveHourFormat,
            twentyFourHour: twentyFourFormat,
          });
        }

        startTime.add(id === "30minute" ? 30 : 15, "minutes");
      }

      setFilteredTimes(filteredTimes);
    }
  }, [location]);
  console.log("location", location);

  return (
    <div className="w-60 ml-2 h-full p-2 overflow-y-scroll space-y-2">
      {filteredTimes.map((item, index) => {
        return (
          <div className="space-y-2" key={index}>
            <button
              className={`w-full border p-2 hover:bg-gray-300 ${
                selectedItem === item.twelveHour ? "bg-gray-200" : ""
              }`}
              onClick={() => handleItemClick(item.twelveHour)}
            >
              {item.twelveHour} ({item.twentyFourHour})
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Time;
