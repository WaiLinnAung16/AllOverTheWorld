import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, population, region, capital, img }) => {
  return (
    <div className="col-span-10 md:col-span-6 lg:col-span-3 bg-white rounded-md shadow overflow-hidden w-[280px]  md:max-w-full h-[330px] transition-all duration-500 hover:border hover:border-1 hover:border-green-600 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/detail/${name}`}>
        <div>
          <img src={img} alt="" className="object-cover w-full h-[150px]" />
        </div>
        <div className=" p-5 flex flex-col gap-3">
          <h1 className=" font-bold text-lg">{name}</h1>
          <div className="flex flex-col justify-center gap-1">
            <p>
              <span className=" font-semibold">Population:</span> {population}
            </p>
            <p>
              <span className=" font-semibold">Region:</span> {region}
            </p>
            <p>
              <span className=" font-semibold">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
