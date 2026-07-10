import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#888" />
      <TextInput
        placeholder="Search players, clubs, leagues..."
        placeholderTextColor="#888"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    color: "white",
    marginLeft: 12,
    flex: 1,
    fontSize: 16,
  },
});