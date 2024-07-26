import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, StyleSheet, ScrollView } from "react-native";

import FallBackImage from "@/components/FallBackImage";
import RenderError from "@/components/RenderError";
import RenderPageLoader from "@/components/RenderPageLoader";

import { useGetMovieDetailsQuery } from "@/state-management/movies-api";

interface MovieDetailsProps {
  movieId: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const params = useLocalSearchParams<{ name: string; movieId: string }>();
  const { isError, isFetching, isLoading, data, error } =
    useGetMovieDetailsQuery({ id: Number(params.movieId) });

  if (isLoading || isFetching) {
    return <RenderPageLoader />;
  }

  if (isError && error) {
    return <RenderError error={error} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: params.name,
        }}
      />
      <FallBackImage
        source={{ uri: `https://image.tmdb.org/t/p/w500${data?.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{data?.title}</Text>
      <Text style={styles.releaseDate}>
        Release Date: {new Date(data?.release_date!).toDateString()}
      </Text>
      <Text style={styles.rating}>
        Average Rating: {data?.vote_average.toFixed(1)}
      </Text>
      <Text style={styles.overview}>{data?.overview}</Text>
      <Text style={styles.subHeading}>Genres:</Text>
      <Text style={styles.details}>
        {data?.genres.map((genre) => genre.name).join(", ")}
      </Text>
      <Text style={styles.subHeading}>Runtime:</Text>
      <Text style={styles.details}>{data?.runtime} minutes</Text>
      <Text style={styles.subHeading}>Production Companies:</Text>
      <Text style={styles.details}>
        {data?.production_companies.map((company) => company.name).join(", ")}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  poster: {
    width: "100%",
    height: 500,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
  },
  overview: {
    fontSize: 16,
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    marginBottom: 40,
  },
});

export default MovieDetails;
