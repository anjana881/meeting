// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import moment from "moment-timezone";
// import "moment-timezone/builds/moment-timezone-with-data";
// import "moment/locale/en-gb";
// import React, { useEffect, useState } from "react";

// import { useDispatch } from "react-redux";
// import { setDate } from "../Slice/DateSlice";
// const Calendar = () => {
//   const dispatch = useDispatch();

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [data, setData] = useState([]);
//   const [selectedTimezone, setSelectedTimezone] = useState("");
//   const [filteredTimes, setFilteredTimes] = useState([]);
//   const minDate = new Date();
//   minDate.setDate(minDate.getDate() - 1);
//   useEffect(() => {
//     flatpickr("#my-calendar", {
//       mode: "single",
//       dateFormat: "Y-m-d",
//       disable: [
//         { from: "1900-01-01", to: minDate },

//         function (date) {
//           return date.getDay() === 0;
//         },
//       ],
//       locale: {
//         firstDayOfWeek: 1,
//       },
//       inline: true,

//       onChange: (selectedDates, dateStr) => {
//         setSelectedDate(selectedDates[0]);
//         dispatch(setDate(selectedDates[0].toLocaleDateString()));
//       },
//     });
//   }, []);

//   useEffect(() => {
//     if (selectedTimezone) {
//       const now = moment().tz(selectedTimezone);
//       const startDate = moment().tz(selectedTimezone).startOf("month");
//       const endDate = moment()
//         .tz(selectedTimezone)
//         .endOf("month")
//         .add(1, "month")
//         .set({ hour: 17, minute: 0, second: 0, millisecond: 0 });
//       if (now.isBefore(endDate)) {
//         endDate.set({
//           hour: 10,
//           minute: 0,
//           second: 0,
//           millisecond: 0,
//         });
//       }
//       const filteredTimes = [];

//       let startTime = moment(startDate)
//         .tz(selectedTimezone)
//         .add(1, "hour")
//         .startOf("hour");

//       while (startTime.isSameOrBefore(endDate)) {
//         if (startTime.isSameOrAfter(now)) {
//           const timeString = startTime.format("h:mm a");
//           filteredTimes.push(timeString);
//         }
//         startTime.add(30, "minutes");
//       }

//       setFilteredTimes(filteredTimes);
//     }
//   }, [selectedTimezone]);

//   return (
//     <div id="my-calendar">
//       {selectedDate && (
//         <p className="text-center ">
//           {" "}
//           Date: {selectedDate.toLocaleDateString()}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Calendar;

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import moment from "moment-timezone";
import "moment-timezone/builds/moment-timezone-with-data";
import "moment/locale/en-gb";
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setDate } from "../Slice/DateSlice";

const Calendar = () => {
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedTimezone, setSelectedTimezone] = useState("");
  const [filteredTimes, setFilteredTimes] = useState([]);
  const minDate = new Date();
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
      const startDate = moment(selectedDate)
        .tz(selectedTimezone)
        .startOf("month");
      const endDate = moment(selectedDate)
        .tz(selectedTimezone)
        .endOf("month")
        .add(1, "month")
        .set({ hour: 17, minute: 0, second: 0, millisecond: 0 });
      if (now.isBefore(endDate)) {
        endDate.set({
          hour: 10,
          minute: 0,
          second: 0,
          millisecond: 0,
        });
      }
      const filteredTimes = [];

      let startTime = moment(startDate)
        .tz(selectedTimezone)
        .add(1, "hour")
        .startOf("hour");

      while (startTime.isSameOrBefore(endDate)) {
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
        <p className="text-center">Date: {selectedDate.toLocaleDateString()}</p>
      )}
      {filteredTimes?.length > 0 && (
        <ul>
          {filteredTimes.map((time) => (
            <li key={time}>{time}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Calendar;
