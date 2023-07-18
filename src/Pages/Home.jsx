import React, { useEffect, useState } from "react";
import { useGetCountriesQuery, useGetRegionQuery } from "../services/countries";
import Search from "../components/Search";
import Select from "../components/Select";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState(null);
  const { data } = useGetCountriesQuery();
  const { data: regions, isFetching } = useGetRegionQuery(region);

  useEffect(() => {
    if (region === null || region === "All") {
      setCountries(data);
    } else {
      setCountries(regions);
    }
  }, [data, regions, region]);
  return (
    <>
      <div className=" container mx-auto px-5 my-10 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start md:items-center">
        <Search />
        <Select setRegion={setRegion} />
      </div>
      <div className="container mx-auto px-5 pb-10">
        <div className=" grid grid-cols-12 gap-10 w-[100%]">
          {isFetching
            ? countries?.map((t, index) => {
                return <CardSkeleton key={index} />;
              })
            : countries?.map((country, index) => {
                return (
                  <Card
                    key={index}
                    name={country.name.common}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                    img={country.flags.png}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
};

export default Home;
