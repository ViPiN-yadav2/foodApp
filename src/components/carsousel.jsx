import React from "react";

export default function Carsousel() {
  return (
    <div className="h-72 relative w-full">
      <div
        className="w-full h-72 bg-no-repeat bg-cover brightness-50 "
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/700x900?burger')",
        }}
      ></div>
      <div className="z-10  w-full  absolute bottom-0  h-16 ">
        <div className="flex justify-center">
          <div className="flex border border-purple-200 rounded">
            <input
              type="text"
              className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
            />
            <button className="px-4 text-white bg-purple-600 border-l rounded ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
