import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "In Theaters",
          headerShown: true,
          unmountOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "play-circle" : "play-circle-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="popular"
        options={{
          title: "Popular",
          headerShown: true,
          unmountOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "star" : "star-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="top-rated"
        options={{
          title: "Top Rated",
          headerShown: true,
          unmountOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "trophy" : "trophy-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="upcoming"
        options={{
          title: "Upcoming",
          headerShown: true,
          unmountOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
