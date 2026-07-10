import { StyleSheet, Text, View } from "react-native";

type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: string;
  competition: string;
};

export default function MatchCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
  competition,
}: MatchCardProps) {
  const hasScore = homeScore !== undefined && awayScore !== undefined;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.competition}>{competition}</Text>
        <View style={styles.statusPill}>
          <Text style={styles.status}>{status}</Text>
        </View>
      </View>

      <View style={styles.matchRow}>
        <Text style={styles.team}>{homeTeam}</Text>
        <Text style={styles.score}>{hasScore ? homeScore : "-"}</Text>
      </View>

      <View style={styles.matchRow}>
        <Text style={styles.team}>{awayTeam}</Text>
        <Text style={styles.score}>{hasScore ? awayScore : "-"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  competition: {
    color: "#888",
    fontSize: 14,
    fontWeight: "600",
  },

  statusPill: {
    backgroundColor: "#102418",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },

  status: {
    color: "#00C853",
    fontSize: 12,
    fontWeight: "800",
  },

  matchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },

  team: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  score: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
});