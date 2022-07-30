import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// I wanted to test rtk query so i implemented it only for fetching data for now.

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://nestapi-env.eba-9kgvuxij.eu-central-1.elasticbeanstalk.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `todos`,
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
