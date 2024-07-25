import MovieCard from "@/components/MovieCard";
import RenderError from "@/components/RenderError";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useGetInTheaterMoviesQuery } from "@/state-management/movies-api";
import { Movie } from "@/types";
import React from "react";
import { Platform, StyleSheet, ScrollView } from "react-native";

export default function upcoming() {
  const { isError, isLoading, error, data } = useGetInTheaterMoviesQuery({
    page: 1,
  });
  if (isLoading) {
    return (
      <ThemedView style={styles.center}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  if (isError && error) {
    return <RenderError error={error} />;
  }

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.page}>
        {data?.results.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ThemedView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  page: {
    padding: Platform.OS === "android" ? 16 : 0,
    backgroundColor: "#f5f5f5",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
