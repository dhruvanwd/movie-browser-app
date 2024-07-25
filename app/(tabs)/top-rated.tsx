import React, { useCallback, useEffect, useState } from "react";
import {
  Platform,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import MovieCard from "@/components/MovieCard";
import RenderError from "@/components/RenderError";
import RenderPageLoader from "@/components/RenderPageLoader";

import { useGetTopRatedMoviesQuery } from "@/state-management/movies-api";
import { Movie } from "@/types";

export default function TopRatedMovies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { isError, isLoading, error, data } = useGetTopRatedMoviesQuery({
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
    return <RenderPageLoader />;
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
      maxToRenderPerBatch={2}
      style={styles.flatList}
      scrollEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
  container: {
    padding: Platform.OS === "android" ? 16 : 0,
    backgroundColor: "#f5f5f5",
  },
});
