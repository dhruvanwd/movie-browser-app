import React, { useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import MovieCard from "@/components/MovieCard";
import RenderError from "@/components/RenderError";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useGetPopularMoviesQuery } from "@/state-management/movies-api";
import { Movie } from "@/types";

export default function PopularMovies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { isError, isLoading, error, data } = useGetPopularMoviesQuery({
    page,
  });

  useEffect(() => {
    if (data?.results) {
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
    }
  }, [data?.results]);

  const loadMore = useCallback(() => {
    console.log("Loading more...");
    if (isLoading) return;
    setPage((prevPage) => prevPage + 1);
  }, [isLoading]);

  if (isLoading && page === 1) {
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
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MovieCard movie={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
      contentContainerStyle={styles.container}
      style={{ flex: 1 }}
      scrollEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === "android" ? 16 : 0,
    backgroundColor: "#f5f5f5",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
