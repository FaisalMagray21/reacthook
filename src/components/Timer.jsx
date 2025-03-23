import React, { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const timeRef = useRef(null);

  const startWatch = () => {
    if (!timeRef.current) {
      timeRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopWatch = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const resetWatch = () => {
    clearInterval(timeRef.current);
    setTime(0);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7130494/pexels-photo-7130494.jpeg')",
      }}
    >
      <h1 className="text-4xl font-bold text-gray-700 mb-6">⏱ Stopwatch</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-64">
        <p className="text-3xl font-semibold text-gray-800 mb-4">{time} sec</p>

        <div className="flex justify-center gap-3">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition duration-300"
            onClick={startWatch}
          >
            Start
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition duration-300"
            onClick={stopWatch}
          >
            Stop
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow-md hover:bg-gray-600 transition duration-300"
            onClick={resetWatch}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
// The Timer component is a simple stopwatch that tracks the time in seconds. It has three buttons: Start, Stop, and Reset. The startWatch function uses setInterval to increment the time state every second. The stopWatch function clears the interval, and the resetWatch function resets the time state to 0.
