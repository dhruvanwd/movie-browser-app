// Need to use the React-specific entry point to import createApi
import { IAuthenticatedUser, MovieResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const TMDB_ACCESS_TOKEN = process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN;

export const mdbAPI = createApi({
  reducerPath: "mdbAPI",
  keepUnusedDataFor: 1800, // 30 minutes
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    },
  }),
  endpoints: (builder) => ({
    AuthenticateUser: builder.query<IAuthenticatedUser, string>({
      query: () => `authentication`,
    }),
    GetInTheaterMovies: builder.query<MovieResponse, { page: number }>({
      query: ({ page }) => `movie/now_playing?language=en-US&page=${page}`,
    }),
    GetPopularMovies: builder.query<MovieResponse, { page: number }>({
      query: ({ page }) => `movie/popular?language=en-US&page=${page}`,
    }),
    GetTopRatedMovies: builder.query<MovieResponse, { page: number }>({
      query: ({ page }) => `movie/top_rated?language=en-US&page=${page}`,
    }),
    GetUpcomingMovies: builder.query<MovieResponse, { page: number }>({
      query: ({ page }) => `movie/upcoming?language=en-US&page=${page}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAuthenticateUserQuery,
  useGetInTheaterMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
} = mdbAPI;
