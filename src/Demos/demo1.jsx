import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";
import "moment/locale/en-gb";
import "moment-timezone/builds/moment-timezone-with-data";

function Demo1() {
  const [data, setData] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [filteredTimes, setFilteredTimes] = useState([]);

  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/timezone")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedTimezone) {
      const now = moment().tz(selectedTimezone);
      const startTime = moment()
        .tz(selectedTimezone)
        .set({ hour: 10, minute: 0, second: 0, millisecond: 0 });
      const endTime = moment()
        .tz(selectedTimezone)
        .set({ hour: 16, minute: 30, second: 0, millisecond: 0 });
      const filteredTimes = [];

      while (startTime.isSameOrBefore(endTime)) {
        if (startTime.isSameOrAfter(now)) {
          const timeString = startTime.format("h:mm a");
          filteredTimes.push(timeString);
        }
        startTime.add(15, "minutes");
      }

      setFilteredTimes(filteredTimes);
    }
  }, [selectedTimezone]);

  return (
    <div className="App">
      <select
        value={selectedTimezone}
        onChange={(e) => setSelectedTimezone(e.target.value)}
      >
        <option value="">Select a timezone</option>
        {data.map((timezone) => (
          <option key={timezone} value={timezone}>
            {timezone}
          </option>
        ))}
      </select>

      {filteredTimes.length > 0 ? (
        <ul>
          {filteredTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      ) : (
        <p>No future times available</p>
      )}
    </div>
  );
}

export default Demo1;
