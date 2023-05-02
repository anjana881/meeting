import React, { useState } from "react";
import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Time from "./Time";
import moment from "moment-timezone";
import "moment/locale/en-gb";
import "moment-timezone/builds/moment-timezone-with-data";

import { useDispatch } from "react-redux";
import { setDate } from "../Slice/DateSlice";
const Calendar = () => {
  const dispatch = useDispatch();

  const minDate = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [data, setData] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [filteredTimes, setFilteredTimes] = useState([]);

  minDate.setDate(minDate.getDate() - 1);
  useEffect(() => {
    flatpickr("#my-calendar", {
      mode: "single",
      dateFormat: "Y-m-d",
      disable: [
        { from: "1900-01-01", to: minDate },
        function (date) {
          return date.getDay() === 0;
        },
      ],
      locale: {
        firstDayOfWeek: 1,
      },
      inline: true,

      onChange: (selectedDates, dateStr) => {
        setSelectedDate(selectedDates[0]);
        dispatch(setDate(selectedDates[0].toLocaleDateString()));
      },
    });
  }, []);
  useEffect(() => {
    if (selectedTimezone && selectedDate) {
      const now = moment().tz(selectedTimezone);
      const startDate = moment(selectedDate).tz(selectedTimezone);
      const startTime = startDate.set({
        hour: 10,
        minute: 0,
        second: 0,
        millisecond: 0,
      });
      const endTime = startDate.set({
        hour: 16,
        minute: 30,
        second: 0,
        millisecond: 0,
      });
      const filteredTimes = [];

      while (startTime.isSameOrBefore(endTime)) {
        if (startTime.isSameOrAfter(now)) {
          const timeString = startTime.format("h:mm a");
          filteredTimes.push(timeString);
        }
        startTime.add(30, "minutes");
      }

      setFilteredTimes(filteredTimes);
    }
  }, [selectedTimezone, selectedDate]);

  return (
    <div id="my-calendar">
      {selectedDate && (
        <p className="text-center ">
          {" "}
          Date: {selectedDate.toLocaleDateString()}
          {/* <p>Month: {selectedDate.getMonth() + 1}</p>
          <p>Date: {selectedDate.getDate()}</p> */}
        </p>
      )}
    </div>
  );
};

export default Calendar;
