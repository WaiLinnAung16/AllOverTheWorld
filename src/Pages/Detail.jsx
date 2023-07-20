import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useGetNameQuery } from "../services/countries";
const Detail = () => {
  const nav = useNavigate();
  const { name } = useParams();
  const { data, isFetching } = useGetNameQuery(name);

  return (
    <div className=" container mx-auto px-5">
      <div className=" my-10">
        <button
          onClick={() => nav("/")}
          className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-[#2B3945] dark:text-white shadow-md font-bold"
        >
          <BsArrowLeft />
          Back
        </button>
      </div>
      {!isFetching && (
        <div className="grid grid-cols-12 gap-5 lg:gap-10 items-center pb-10 dark:text-white">
          <div className=" col-span-12 lg:col-span-6">
            <div className=" w-full">
              <img
                src={data[0]?.flags?.svg}
                alt=""
                className="aspect-video object-cover"
              />
            </div>
          </div>
          <div className=" col-span-12 lg:col-span-6">
            <div className=" flex flex-col gap-5">
              <h1 className=" font-bold text-2xl">{data[0]?.name.common}</h1>
              <div className=" flex flex-col flex-wrap gap-2 h-[280px] md:h-[180px]">
                <p>
                  <span className=" font-semibold">Population: </span>
                  {data[0]?.population}
                </p>
                <p>
                  <span className=" font-semibold">Region: </span>
                  {data[0]?.region}
                </p>
                <p>
                  <span className=" font-semibold">Sub Region: </span>
                  {data[0]?.subregion}
                </p>
                <p>
                  <span className=" font-semibold">Capital: </span>
                  {data[0]?.capital}
                </p>
                <p>
                  <span className=" font-semibold">Top Level Domain: </span>
                  {data[0]?.tld[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
