import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

interface RenderErrorProps {
  error: FetchBaseQueryError | SerializedError;
}

const RenderError: React.FC<RenderErrorProps> = ({ error }) => {
  if ("status" in error) {
    // FetchBaseQueryError
    const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {errMsg}</Text>
      </View>
    );
  } else {
    // SerializedError
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default RenderError;
