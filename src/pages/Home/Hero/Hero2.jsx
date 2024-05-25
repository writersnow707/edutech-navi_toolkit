import React from "react";

import bgImg from "../../../assets/home/banner-2.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="min-h-screen flex justify-start pl-11 items-center text-white bg-black bg-opacity-10">
        <div>
          <div className="flex justify-center items-center gap-10 bg-opacity-10">
            <button className="px-7 py-7 rounded-lg bg-red-600 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-pink-500 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-orange-500 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-orange-300 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-yellow-500 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-green-400 font-bold uppercase">
              Join Today
            </button>
          </div>
          <div className="flex justify-center py-10 items-center gap-10 bg-opacity-10">
            <button className="px-7 py-7 rounded-lg bg-green-500 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-sky-400 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-blue-600 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-purple-500 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-gray-900 font-bold uppercase">
              Join Today
            </button>
            <button className="px-7 py-7 rounded-lg bg-amber-700 font-bold uppercase">
              Join Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
