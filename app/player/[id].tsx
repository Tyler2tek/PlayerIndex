import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const players = {
  mbappe: {
    name: "Kylian Mbappé",
    club: "Real Madrid",
    position: "Forward",
    nation: "France",
    age: "26",
    shirt: "#10",
    rating: "9.2",
    goals: "24",
    assists: "9",
    matches: "31",
    minutes: "2,640",
    summary:
      "Mbappé is an elite attacking threat with world-class speed, finishing, and movement. He is dangerous in transition and can change a match with one run behind the defense.",
    previousClubs: "PSG • Monaco",
  },

  yamal: {
    name: "Lamine Yamal",
    club: "Barcelona",
    position: "Winger",
    nation: "Spain",
    age: "18",
    shirt: "#19",
    rating: "8.9",
    goals: "11",
    assists: "14",
    matches: "35",
    minutes: "2,480",
    summary:
      "Yamal is one of the most exciting young wingers in world football. His dribbling, creativity, left foot, and confidence make him a major attacking weapon.",
    previousClubs: "Barcelona Academy",
  },

  haaland: {
    name: "Erling Haaland",
    club: "Manchester City",
    position: "Striker",
    nation: "Norway",
    age: "25",
    shirt: "#9",
    rating: "9.0",
    goals: "29",
    assists: "6",
    matches: "34",
    minutes: "2,770",
    summary:
      "Haaland is a dominant striker known for his power, movement, finishing, and ability to score from almost anywhere inside the box.",
    previousClubs: "Borussia Dortmund • RB Salzburg • Molde",
  },
};

export default function PlayerProfileScreen() {
  const { id } = useLocalSearchParams();

  const player =
    players[String(id) as keyof typeof players] ?? players.mbappe;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={58} color="#00C853" />
        </View>

        <Text style={styles.name}>{player.name}</Text>

        <Text style={styles.subtitle}>
          {player.club} • {player.position}
        </Text>

        <View style={styles.ratingBox}>
          <Text style={styles.rating}>{player.rating}</Text>
          <Text style={styles.ratingLabel}>Player Rating</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Player Info</Text>

      <View style={styles.infoGrid}>
        <InfoBox label="Age" value={player.age} />
        <InfoBox label="Nation" value={player.nation} />
        <InfoBox label="Position" value={player.position} />
        <InfoBox label="Shirt" value={player.shirt} />
      </View>

      <Text style={styles.sectionTitle}>Season Stats</Text>

      <View style={styles.statsGrid}>
        <StatBox label="Goals" value={player.goals} />
        <StatBox label="Assists" value={player.assists} />
        <StatBox label="Matches" value={player.matches} />
        <StatBox label="Minutes" value={player.minutes} />
      </View>

      <Text style={styles.sectionTitle}>AI Player Summary</Text>

      <View style={styles.aiCard}>
        <Text style={styles.aiTitle}>Scouting Report</Text>
        <Text style={styles.aiText}>{player.summary}</Text>
      </View>

      <Text style={styles.sectionTitle}>Career Snapshot</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Current Club</Text>
        <Text style={styles.cardSubtitle}>{player.club}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Previous Clubs</Text>
        <Text style={styles.cardSubtitle}>{player.previousClubs}</Text>
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