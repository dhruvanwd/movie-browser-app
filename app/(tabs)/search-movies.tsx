import React from "react";
import { FlatList, SafeAreaView, StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import IconButton from "@/components/IconButton";
import RenderPageLoader from "@/components/RenderPageLoader";
import RenderError from "@/components/RenderError";

import { useSearchMoviesQuery } from "@/state-management/movies-api";
import MovieListItem from "@/components/MovieListItem";

export default function SearchMovies() {
  const [text, onChangeText] = React.useState("king");
  const { isError, isLoading, data, error } = useSearchMoviesQuery({
    searchText: text,
  });

  if (isLoading) {
    return <RenderPageLoader />;
  }

  if (isError && error) {
    return <RenderError error={error} />;
  }
  console.log(data?.total_results);
  return (
    <SafeAreaView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.seachbox}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <IconButton
            name="close"
            color="black"
            onPress={() => onChangeText("")}
            size={20}
          />
        </ThemedView>
        <FlatList
          data={data?.results}
          renderItem={({ item }) => <MovieListItem movie={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={true}
          ListHeaderComponent={<ThemedText>Movies</ThemedText>}
          style={{
            flex: 1,
          }}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    height: 400,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  seachbox: {
    flex: 1,
    position: "relative",
  },
  listContainer: {
    paddingHorizontal: 10,
    backgroundColor: "blue",
    flex: 1,
  },
});
