import React from "react";
import { Movie } from "@/types";
import { useRouter } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();
  const percentage = Math.round(movie.vote_average * 10);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        router.push({
          pathname: "/movie-details",
          params: {
            movieId: movie.id,
          },
        });
      }}
    >
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          }}
          style={styles.poster}
        />
        <View style={styles.infoContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{percentage}%</Text>
          </View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.releaseDate}>
            Release Date: {movie.release_date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  poster: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 15,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 12,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    borderRadius: 50,
    height: 50,
    width: 50,
    padding: 8,
    top: -26,
    left: 16,
    backgroundColor: "#97C4B8",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default MovieCard;
