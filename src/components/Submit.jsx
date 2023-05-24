import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Submit = () => {
  const { id } = useParams();
  const date = useSelector((state) => state.dateSlice.date);
  console.log(date);

  const time = useSelector((state) => state.dateSlice.time);
  console.log(time);
  const country = useSelector((state) => state.detailSlice.country);
  console.log("country", country);

  const guest = useSelector((state) => state.detailSlice.guest);
  console.log(guest);
  const name = useSelector((state) => state.detailSlice.name);
  const email = useSelector((state) => state.detailSlice.email);
  const notes = useSelector((state) => state.detailSlice.notes);
  console.log(name);
  return (
    <>
      <div className="w-[55%] font-bold text-xl rounded-lg  bg-slate-300 shadow-xl shadow-neutral-950 m-auto mt-10">
        <p className="mb-2 font-bold text-xl text-center text-green-600 ">
          Your meeting has been Scheduled ✔
        </p>
        <p className="mb-4  p-2 text-center font-bold text-xl">Details:</p>
        <div className="m-auto mb-6 mt-[5rem] flex  ">
          <div className="pl-12 w-[50%] flex flex-col  text-amber-950  text-sm ">
            <p className="mb-4 font-bold">Name:{name}</p>
            <p className="mb-4 font-bold">Email:{email}</p>
            <p className="mb-4 font-bold">Notes:{notes}</p>
            <p className="mb-4 font-bold ">Guest Email: {guest}</p>
          </div>

          <div className="w-[50%] text-sm flex flex-col justify-items-end  text-amber-950">
            <p className="mb-4 font-bold">Date:{date}</p>
            <p className="mb-3 font-bold"> Time:{time}</p>
            <p className="mb-3 font-bold"> Location:{country}</p>
          </div>
        </div>
        <p className="mb-2 font-bold text-base text-amber-950 text-center ">
          Click{" "}
          <span className="text-green-700 text-center cursor-pointer">
            <Link to={`/${id}`}>&nbsp; HERE &nbsp;</Link>
          </span>
          to reschedule again.
        </p>
      </div>
    </>
  );
};

export default Submit;
