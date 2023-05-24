import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="content bg-gray-200 text-black w-screen h-screen flex flex-col justify-center items-center relative">
        <h1 className="text-7xl font-bold text-gray-600">Anjana Bhattrai</h1>
        <p className="text-sm text-gray-900 pt-2">
          React | js (web developer / frontend developer)
        </p>
        <Link
          to="/30minute"
          className="bg-white rounded-xl w-1/3 shadow-xl p-8 px-6 mt-8 flex flex-col justify-center hover:bg-green-200 cursor-pointer"
        >
          <p>30 min meeting</p>
          <div className="flex space-x-2">
            <p className="bg-gray-200 rounded-2xl w-16">🕒 30</p>
            <p className="bg-gray-200 rounded-2xl w-16 px-1"> 1-👤-1</p>
          </div>
        </Link>

        <Link
          to="/15minute"
          className="bg-white rounded-xl w-1/3 shadow-xl p-8 px-6 mt-4 flex flex-col justify-center hover:bg-green-200 cursor-pointer mb-12"
        >
          <p>15 min meeting</p>
          <div className="flex space-x-2">
            <p className="bg-gray-200 rounded-2xl w-16">🕒 15</p>
            <p className="bg-gray-200 rounded-2xl w-16 px-1"> 1-👤-1</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
