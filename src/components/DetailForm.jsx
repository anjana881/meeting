import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setEmail, setGuest, setName, setNotes } from "../Slice/DetailSlice";
import { AiOutlineUserAdd } from "react-icons/ai";
const DetailForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/submit");
  };
  // const guest = useSelector((state) => state.detailSlice.guest);
  // dispatch(setGuest(guest));
  const [toggleGuest, setToggleGuest] = useState(false);
  const handleToggleGuest = () => {
    setToggleGuest(!toggleGuest);
  };
  const handleInputName = (e) => {
    dispatch(setName(e.target.value));

    console.log("details", e.target.value);
  };

  const handleInputEmail = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const handleInputNotes = (e) => {
    dispatch(setNotes(e.target.value));
  };
  const handleGuest = (event) => {
    dispatch(setGuest(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm font-bold">Your Name</p>
      <input
        type="text"
        onChange={handleInputName}
        className="border p-2 w-full rounded-md mt-1 "
        required
      />
      <p className="text-sm font-bold mt-2">Email address</p>
      <input
        type="email"
        onChange={handleInputEmail}
        className="border p-2 w-full rounded-md mt-1"
        required
      />

      {toggleGuest && (
        <div className="text-sm font-bold mt-2">
          <p className="font-bold">Guest Email</p>
          <input
            type="email"
            onChange={handleGuest}
            className="border p-2 w-full rounded-md mt-1"
          />
        </div>
      )}

      <p className="text-sm font-bold mt-2">Additional Notes</p>
      <textarea
        name=""
        id=""
        cols="40"
        rows="3"
        onChange={handleInputNotes}
        className="border"
      ></textarea>
      <i onClick={handleToggleGuest}>
        <AiOutlineUserAdd />
      </i>
      <div className="flex">
        <button className="border border-cyan-100 mr-4 rounded-md bg-slate-400 p-2">
          Submit
        </button>

        <Link to="/cancel">
          <button className="border border-cyan-100 rounded-md bg-red-500 p-2">
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
};

export default DetailForm;
