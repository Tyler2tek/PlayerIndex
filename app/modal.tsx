import { StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PlayerIndex</Text>
      <Text style={styles.subtitle}>Modal screen placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    color: "#888",
    fontSize: 16,
    marginTop: 10,
  },
});