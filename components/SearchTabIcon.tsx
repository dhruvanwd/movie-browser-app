import { View, StyleSheet } from "react-native";

import { TabBarIcon } from "./navigation/TabBarIcon";

const SearchTabIcon = () => (
  <View style={styles.searchIconContainer}>
    <TabBarIcon
      name={"search"}
      size={30} // Slightly bigger size
    />
  </View>
);

const styles = StyleSheet.create({
  searchIconContainer: {
    backgroundColor: "#97C4B8",
    borderRadius: 30, // Circular
    padding: 5, // Adjust padding as needed
    marginTop: -20, // Slightly on top
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default SearchTabIcon;
