// UsageMetrics.tsx
import React from 'react';

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

const UsageMetrics: React.FC = () => {
  return (
    <div className="w-full rounded-md justify-center gap-4 m-auto border-[0px] p-0 my-10">
      {/* <div className="w-full md:w-auto mx-auto my-2"> */}
      <h2 className="text-3xl font-extrabold mb-6 text-blue-600">
        User Activity
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div className="w-full max-w-xl lg:max-w-full bg-gray-800 text-white rounded-lg shadow-md p-6 overflow-hidden">
          <h3 className="text-white">Graphs Created</h3>
          <h1 className="text-5xl font-bold text-white">
            {getRandomNumber(1, 100)}
          </h1>
        </div>
        <div className="w-full max-w-xl lg:max-w-full bg-gray-800 text-white rounded-lg shadow-md p-6 overflow-hidden">
          <h3 className="text-white">Graphs Shared</h3>
          <h1 className="text-5xl font-bold text-white">
            {getRandomNumber(1, 100)}
          </h1>
        </div>
        <div className="w-full max-w-xl lg:max-w-full bg-gray-800 text-white mx-auto rounded-lg shadow-md p-6 overflow-hidden">
          <h3 className="text-white">Paper Collected</h3>
          <h1 className="text-5xl font-bold text-white">
            {getRandomNumber(1, 100)}
          </h1>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default UsageMetrics;
