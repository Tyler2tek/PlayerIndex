import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type LeagueCardProps = {
  name: string;
  country: string;
  icon?: keyof typeof Ionicons.glyphMap;
};

export default function LeagueCard({
  name,
  country,
  icon = "trophy",
}: LeagueCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Ionicons name={icon} size={24} color="#00C853" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#666" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: "#102418",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  country: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
  },
});