import { Ionicons } from "@expo/vector-icons";
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface IconButtonProps {
  name: typeof Ionicons.arguments;
  color: string;
  size: number;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton = ({ name, color, size, onPress }: IconButtonProps) => (
  <TouchableOpacity
    style={styles.iconButton}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Ionicons name={name} color={color} size={size} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: "white", // Button background color
    borderRadius: 30, // Circular shape
    alignItems: "center", // Center the icon
    justifyContent: "center", // Center the icon
    elevation: 3, // Add shadow for Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
    position: "absolute",
    right: 20,
    width: 30,
    height: 30,
    top: 16,
  },
});

export default IconButton;
