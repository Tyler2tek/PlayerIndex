import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function PlayerProfileScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={58} color="#00C853" />
        </View>

        <Text style={styles.name}>Kylian Mbappé</Text>
        <Text style={styles.subtitle}>Real Madrid • Forward</Text>

        <View style={styles.ratingBox}>
          <Text style={styles.rating}>9.2</Text>
          <Text style={styles.ratingLabel}>Player Rating</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Player Info</Text>

      <View style={styles.infoGrid}>
        <InfoBox label="Age" value="26" />
        <InfoBox label="Nation" value="France" />
        <InfoBox label="Position" value="FW" />
        <InfoBox label="Shirt" value="#10" />
      </View>

      <Text style={styles.sectionTitle}>Season Stats</Text>

      <View style={styles.statsGrid}>
        <StatBox label="Goals" value="24" />
        <StatBox label="Assists" value="9" />
        <StatBox label="Matches" value="31" />
        <StatBox label="Minutes" value="2,640" />
      </View>

      <Text style={styles.sectionTitle}>AI Player Summary</Text>

      <View style={styles.aiCard}>
        <Text style={styles.aiTitle}>Elite Attacking Threat</Text>
        <Text style={styles.aiText}>
          Mbappé is one of the most dangerous forwards in world football. His
          speed, finishing, movement, and ability to attack space make him a
          constant threat in transition and around the box.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Career Snapshot</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Club</Text>
        <Text style={styles.cardSubtitle}>Real Madrid</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Previous Clubs</Text>
        <Text style={styles.cardSubtitle}>PSG • Monaco</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Profile ID</Text>
        <Text style={styles.cardSubtitle}>{String(id)}</Text>
      </View>

      <View style={styles.bottomSpace} />
    </ScrollView>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoValue}>{value}</Text>
      <Text style={styles.infoLabel}>{label}</Text>
    </View>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: "#102418",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#00C853",
    marginBottom: 16,
  },

  name: {
    color: "white",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "center",
  },

  subtitle: {
    color: "#AAAAAA",
    fontSize: 16,
    marginTop: 6,
  },

  ratingBox: {
    backgroundColor: "#00C853",
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 16,
    alignItems: "center",
  },

  rating: {
    color: "#001B0A",
    fontSize: 22,
    fontWeight: "900",
  },

  ratingLabel: {
    color: "#001B0A",
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },

  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
    marginTop: 24,
    marginBottom: 14,
  },

  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  infoBox: {
    backgroundColor: "#1B1B1B",
    borderRadius: 20,
    padding: 16,
    width: "47%",
    borderWidth: 1,
    borderColor: "#242424",
  },

  infoValue: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },

  infoLabel: {
    color: "#888",
    fontSize: 13,
    marginTop: 6,
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  statBox: {
    backgroundColor: "#1B1B1B",
    borderRadius: 20,
    padding: 16,
    width: "47%",
    borderWidth: 1,
    borderColor: "#242424",
  },

  statValue: {
    color: "#00C853",
    fontSize: 24,
    fontWeight: "900",
  },

  statLabel: {
    color: "#AAAAAA",
    fontSize: 13,
    marginTop: 6,
  },

  aiCard: {
    backgroundColor: "#102418",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "#00C853",
  },

  aiTitle: {
    color: "#00C853",
    fontSize: 20,
    fontWeight: "900",
  },

  aiText: {
    color: "#CCCCCC",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },

  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
  },

  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },

  cardSubtitle: {
    color: "#888",
    fontSize: 15,
    marginTop: 6,
  },

  bottomSpace: {
    height: 50,
  },
});