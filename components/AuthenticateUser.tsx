import { useAuthenticateUserQuery } from "@/state-management/movies-api";
import React, { PropsWithChildren } from "react";
import { Text } from "react-native";

export default function AuthenticateUser({ children }: PropsWithChildren) {
  const { data, error, isLoading } = useAuthenticateUserQuery("");
  console.log({ data, error, isLoading });
  if (isLoading) return <Text>Authenticating...</Text>;
  if (error) return <Text>Error: {JSON.stringify(error)}</Text>;
  return <>{children}</>;
}
