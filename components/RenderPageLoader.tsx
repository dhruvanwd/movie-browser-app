import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export default function RenderPageLoader() {
  return (
    <ThemedView style={styles.loaderContainer}>
      <ThemedText>Loading...</ThemedText>
      <ActivityIndicator />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
