import React from "react";
import { FlatList, StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import IconButton from "@/components/IconButton";
import RenderPageLoader from "@/components/RenderPageLoader";
import RenderError from "@/components/RenderError";
import MovieListItem from "@/components/MovieListItem";

import { useSearchMoviesQuery } from "@/state-management/movies-api";

export default function SearchMovies() {
  const [text, onChangeText] = React.useState("");
  const { isError, isLoading, data, error } = useSearchMoviesQuery({
    searchText: text,
  });

  if (isLoading) {
    return <RenderPageLoader />;
  }

  if (isError && error) {
    return <RenderError error={error} />;
  }

  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Movie name"
      />
      <IconButton
        name="close"
        color="black"
        onPress={() => onChangeText("")}
        style={styles.closeSearch}
        size={20}
      />
      <FlatList
        data={data?.results}
        renderItem={({ item }) => <MovieListItem movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <ThemedText style={styles.emptyWarning}>
            {text.length ? "No Movies Found..!" : "Search to find movies"}
          </ThemedText>
        }
        scrollEnabled={true}
        ListHeaderComponent={
          <ThemedText style={styles.listHeader}>Movies</ThemedText>
        }
        style={styles.container}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  closeSearch: {
    position: "absolute",
    right: 16,
    width: 30,
    height: 30,
    top: 12,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  listHeader: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyWarning: {
    color: "black",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    marginTop: 40,
  },
});
