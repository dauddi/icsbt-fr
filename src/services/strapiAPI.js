import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const strapiAPI = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337/api/" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `todos`,
    }),
  }),
});

export const { useGetAllTodosQuery } = strapiAPI;
