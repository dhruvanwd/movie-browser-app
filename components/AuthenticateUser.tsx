import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import RenderError from "./RenderError";

import { useAuthenticateUserQuery } from "@/state-management/movies-api";

export default function AuthenticateUser({ children }: PropsWithChildren) {
  const { error, isLoading } = useAuthenticateUserQuery("");
  if (isLoading)
    return (
      <ThemedView style={styles.auth}>
        <ThemedText>Authenticating...</ThemedText>
      </ThemedView>
    );
  if (error) return <RenderError error={error} />;

  return <>{children}</>;
}

const styles = StyleSheet.create({
  auth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    minHeight: 200,
  },
});
