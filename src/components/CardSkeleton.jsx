import React from "react";

const CardSkeleton = () => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-md overflow-hidden shadow max-w-sm h-[330px]">
      <div className="w-full h-[150px] bg-gray-500 animate-pulse"></div>
      <div className=" p-5 flex flex-col gap-3">
        <h1 className=" w-40 h-6 bg-gray-400 animate-pulse"></h1>
        <div className="flex flex-col justify-center gap-1">
          <p>
            <span className=" font-semibold">
              Population:{" "}
              <span className="inline-block align-middle w-32 h-6 bg-gray-400 animate-pulse"></span>
            </span>
          </p>
          <p>
            <span className=" font-semibold">
              Region:{" "}
              <span className="inline-block align-middle w-32 h-6 bg-gray-400 animate-pulse"></span>
            </span>
          </p>
          <p>
            <span className=" font-semibold">
              Capital:{" "}
              <span className="inline-block align-middle w-32 h-6 bg-gray-400 animate-pulse"></span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
