// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import moment from "moment-timezone";
// import "moment/locale/en-gb";
// import "moment-timezone/builds/moment-timezone-with-data";

// function Demo() {
//   const [data, setData] = useState([]);
//   const [selectedTimezone, setSelectedTimezone] = useState("");
//   const [filteredTimes, setFilteredTimes] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://worldtimeapi.org/api/timezone")
//       .then((res) => {
//         setData(res.data);
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedTimezone) {
//       const now = moment().tz(selectedTimezone);
//       const startTime = moment()
//         .tz(selectedTimezone)
//         .set({ hour: 10, minute: 0, second: 0, millisecond: 0 });
//       const endTime = moment()
//         .tz(selectedTimezone)
//         .set({ hour: 16, minute: 30, second: 0, millisecond: 0 });
//       const filteredTimes = [];

//       while (startTime.isSameOrBefore(endTime)) {
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
//     <div className="App">
//       <select
//         value={selectedTimezone}
//         onChange={(e) => setSelectedTimezone(e.target.value)}
//       >
//         <option value="">Select a timezone</option>
//         {data.map((timezone) => (
//           <option key={timezone} value={timezone}>
//             {timezone}
//           </option>
//         ))}
//       </select>

//       {filteredTimes.length > 0 ? (
//         <ul>
//           {filteredTimes.map((time) => (
//             <li key={time}>{time}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No future times available</p>
//       )}
//     </div>
//   );
// }

// export default Demo;

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-timezone";
import "moment/locale/en-gb";
import "moment-timezone/builds/moment-timezone-with-data";

function Demo() {
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
      const startDate = moment().tz(selectedTimezone);
      const endDate = moment().tz(selectedTimezone).add(7, "days");
      const filteredTimes = [];

      while (startDate.isSameOrBefore(endDate)) {
        const startTime = moment(startDate).set({
          hour: 10,
          minute: 0,
          second: 0,
          millisecond: 0,
        });
        const endTime = moment(startDate).set({
          hour: 16,
          minute: 59,
          second: 59,
          millisecond: 999,
        });

        while (startTime.isSameOrBefore(endTime)) {
          if (startDate.isSame(now, "day") && startTime.isBefore(now)) {
            // skip times that have already passed today
          } else {
            const timeString = startTime.format("h:mm a");
            filteredTimes.push(
              `${startDate.format("DD/MM/YYYY")} ${timeString}`
            );
          }
          startTime.add(30, "minutes");
        }

        startDate.add(1, "day");
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

export default Demo;
// const [selectedTimezone, setSelectedTimezone] = useState("");
{
  /* <div className="flex justify-between"> */
}
// import { twelveHourFormat, twentyFourFormat } from "./TimeArr";
{
  /* <h1 className="font-medium mb-4 ">Date: {date}</h1> */
} // const [timeState, setTimeState] = useState(twelveHourFormat);

// const handleToggle = () => {
//   setTimeState(
//     timeState === twelveHourFormat ? twentyFourFormat : twelveHourFormat
//   );
//   setSelectedItem(null); // reset selected item when toggling between time formats
// };

{
  /* <div className="text-xl font-bold pt-[10px] ml-20">
          {timeState === twelveHourFormat
            tann ? "12 - hr" : "24 - hr"}
        </div>
        {timeState === twelveHourFormat ? (
          <span
            onClick={handleToggle}
            className="material-symbols-outlined text-5xl cursor-pointer "
          >
            toggle_on
          </span>
        ) : (
          <span
            onClick={handleToggle}
            className="material-symbols-outlined text-5xl cursor-pointer"
          >
            toggle_off
          </span>
        )}
      </div> */
}
