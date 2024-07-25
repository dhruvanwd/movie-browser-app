import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";
import { Text, StyleSheet } from "react-native";

export default function upcoming() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">upcoming</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
