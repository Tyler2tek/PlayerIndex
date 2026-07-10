import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={42} color="#00C853" />
        </View>

        <Text style={styles.name}>Tyler</Text>
        <Text style={styles.username}>PlayerIndex Founder</Text>
      </View>

      <Text style={styles.sectionTitle}>Account</Text>

      <View style={styles.card}>
        <Ionicons name="star" size={22} color="#00C853" />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Favorites</Text>
          <Text style={styles.cardSubtitle}>Players, clubs, leagues, and matches</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Ionicons name="notifications" size={22} color="#00C853" />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Notifications</Text>
          <Text style={styles.cardSubtitle}>Goals, assists, transfers, and news alerts</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Ionicons name="settings" size={22} color="#00C853" />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardSubtitle}>App theme, privacy, and preferences</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>PlayerIndex Premium</Text>

      <View style={styles.premiumCard}>
        <Text style={styles.premiumTitle}>Unlock AI Scouting</Text>
        <Text style={styles.premiumText}>
          Get advanced player comparisons, AI reports, transfer predictions,
          custom alerts, and deeper analytics.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>App Status</Text>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Current Build</Text>
        <Text style={styles.statusText}>Milestone 1: UI Foundation</Text>
        <Text style={styles.statusText}>API-Football: Not connected yet</Text>
        <Text style={styles.statusText}>Live Data: Coming soon</Text>
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#102418",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#00C853",
  },

  name: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
  },

  username: {
    color: "#AAAAAA",
    fontSize: 16,
    marginTop: 6,
  },

  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 14,
  },

  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
    flexDirection: "row",
    alignItems: "center",
  },

  cardText: {
    marginLeft: 14,
    flex: 1,
  },

  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  cardSubtitle: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
    lineHeight: 20,
  },

  premiumCard: {
    backgroundColor: "#102418",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#00C853",
  },

  premiumTitle: {
    color: "#00C853",
    fontSize: 21,
    fontWeight: "900",
  },

  premiumText: {
    color: "#CCCCCC",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  statusCard: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
  },

  statusTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  statusText: {
    color: "#AAAAAA",
    fontSize: 14,
    marginTop: 5,
  },

  bottomSpace: {
    height: 40,
  },
});