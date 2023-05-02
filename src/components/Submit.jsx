import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Submit = () => {
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
    <div className="m-auto w-[35%] mt-[5rem] flex flex-col bg-slate-300 shadow-xl shadow-neutral-950">
      <div className="flex flex-col  mb-4 p-8 pb-16">
        <p className="mb-8 font-bold text-xl text-center text-green-600 ">
          Your meeting has been Scheduled ✔
        </p>

        <br />
        <div className="pl-8 flex flex-col  text-amber-950 ">
          <p className="mb-8 p-2 text-center font-bold text-xl">Details:</p>
          <p className="mb-4 font-bold">Name:{name}</p>
          <p className="mb-4 font-bold">Email:{email}</p>
          <p className="mb-4 font-bold">Notes:{notes}</p>
          <p className="mb-4 font-bold">Date:{date}</p>
          <p className="mb-3 font-bold"> Time:{time}</p>
          <p className="mb-3 font-bold"> Location:{country}</p>
          <p className=" mb-3 font-bold ">Guest Email: {guest}</p>
        </div>
      </div>
    </div>
  );
};

export default Submit;
