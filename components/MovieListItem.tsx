import React from "react";
import { Movie } from "@/types";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FallBackImage from "./FallBackImage";

interface MovieListItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
  const router = useRouter();
  const percentage = Math.round(movie.vote_average * 10);
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.9}
      onPress={() => {
        router.push({
          pathname: "/movie-details",
          params: {
            movieId: movie.id,
            name: movie.title,
          },
        });
      }}
    >
      <View style={styles.card}>
        <FallBackImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={styles.poster}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseDate}>
            Release Date: {movie.release_date}
          </Text>
          <Text style={styles.ratingText}>Rating: {percentage}%</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  poster: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 14,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default MovieListItem;
