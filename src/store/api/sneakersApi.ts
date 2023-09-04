import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sneakersApi = createApi({
  reducerPath: "sneakersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crudcrud.com/api/9a13c0c604a849929a2113cd07ed4aba",
  }),
  endpoints: (build) => ({
    getSneakers: build.query({
      query: () => `/sneakers`,
    }),
  }),
});

export const { useGetSneakersQuery } = sneakersApi;
