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

import { useGetPopularMoviesQuery } from "@/state-management/movies-api";
import useTheme from "@/hooks/useTheme";
import { Colors } from "@/constants/Colors";
import { Movie } from "@/types";

export default function PopularMovies() {
  const theme = useTheme();
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
      contentContainerStyle={[
        styles.container,
        {
          backgroundColor: Colors[theme].background,
        },
      ]}
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
  },
});
