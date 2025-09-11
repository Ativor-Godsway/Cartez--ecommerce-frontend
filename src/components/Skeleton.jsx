import React from "react";

const Skeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 p-2 md:p-10">
      <div className="flex flex-col gap-4 mb-5 ">
        <div className="skeleton w-[42vw] md:w-[30vw] aspect-square"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="skeleton w-[47vw] md:w-[30vw] aspect-square"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="skeleton w-[47vw] md:w-[30vw] aspect-square"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="skeleton w-[47vw] md:w-[30vw] aspect-square"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="skeleton w-[47vw] md:w-[30vw] aspect-square"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="skeleton w-[47vw] md:w-[30vw] aspect-square"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default Skeleton;
