import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "all",
    }),
    getRegion: builder.query({
      query: (region) => `region/${region}`,
    }),
    getName: builder.query({
      query: (name) => `name/${name}`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetRegionQuery, useGetNameQuery } =
  countriesApi;
