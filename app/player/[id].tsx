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
    marketValue: "€180M",
    preferredFoot: "Right",
    height: "178 cm",
    summary:
      "Mbappé is an elite attacking threat with world-class speed, finishing, and movement. He is dangerous in transition and can change a match with one run behind the defense.",
    strengths: ["Speed", "Finishing", "Movement", "1v1 Attacking"],
    weaknesses: ["Aerial duels", "Defensive work rate"],
    previousClubs: ["PSG", "Monaco"],
    transfers: [
      { from: "PSG", to: "Real Madrid", fee: "Free Transfer", year: "2024" },
      { from: "Monaco", to: "PSG", fee: "€180M", year: "2018" },
    ],
    similarPlayers: ["Vinícius Jr", "Rafael Leão", "Marcus Rashford"],
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
    marketValue: "€150M",
    preferredFoot: "Left",
    height: "180 cm",
    summary:
      "Yamal is one of the most exciting young wingers in world football. His dribbling, creativity, left foot, and confidence make him a major attacking weapon.",
    strengths: ["Dribbling", "Creativity", "Crossing", "Chance Creation"],
    weaknesses: ["Physical strength", "Defensive consistency"],
    previousClubs: ["Barcelona Academy"],
    transfers: [{ from: "Barcelona Academy", to: "Barcelona", fee: "Academy", year: "2023" }],
    similarPlayers: ["Bukayo Saka", "Arda Güler", "Phil Foden"],
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
    marketValue: "€180M",
    preferredFoot: "Left",
    height: "194 cm",
    summary:
      "Haaland is a dominant striker known for his power, movement, finishing, and ability to score from almost anywhere inside the box.",
    strengths: ["Finishing", "Strength", "Positioning", "Runs in behind"],
    weaknesses: ["Link-up play", "Dribbling in tight spaces"],
    previousClubs: ["Borussia Dortmund", "RB Salzburg", "Molde"],
    transfers: [
      { from: "Borussia Dortmund", to: "Manchester City", fee: "€60M", year: "2022" },
      { from: "RB Salzburg", to: "Borussia Dortmund", fee: "€20M", year: "2020" },
    ],
    similarPlayers: ["Victor Osimhen", "Harry Kane", "Alexander Isak"],
  },

  messi: {
    name: "Lionel Messi",
    club: "Inter Miami",
    position: "Forward",
    nation: "Argentina",
    age: "39",
    shirt: "#10",
    rating: "8.8",
    goals: "18",
    assists: "16",
    matches: "28",
    minutes: "2,210",
    marketValue: "€20M",
    preferredFoot: "Left",
    height: "170 cm",
    summary:
      "Messi is an all-time great playmaker and forward. His vision, control, passing, and finishing make him one of the most complete attackers ever.",
    strengths: ["Vision", "Passing", "Dribbling", "Finishing"],
    weaknesses: ["Pressing intensity", "Defensive coverage"],
    previousClubs: ["PSG", "Barcelona", "Newell's Youth"],
    transfers: [
      { from: "PSG", to: "Inter Miami", fee: "Free Transfer", year: "2023" },
      { from: "Barcelona", to: "PSG", fee: "Free Transfer", year: "2021" },
    ],
    similarPlayers: ["Paulo Dybala", "Antoine Griezmann", "Bernardo Silva"],
  },

  ronaldo: {
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    position: "Forward",
    nation: "Portugal",
    age: "41",
    shirt: "#7",
    rating: "8.6",
    goals: "25",
    assists: "5",
    matches: "30",
    minutes: "2,500",
    marketValue: "€15M",
    preferredFoot: "Right",
    height: "187 cm",
    summary:
      "Ronaldo is one of the greatest goal scorers in football history. His finishing, movement, aerial ability, and mentality have made him elite for decades.",
    strengths: ["Finishing", "Heading", "Movement", "Mentality"],
    weaknesses: ["Pressing", "Acceleration compared to prime years"],
    previousClubs: ["Manchester United", "Juventus", "Real Madrid", "Sporting CP"],
    transfers: [
      { from: "Manchester United", to: "Al Nassr", fee: "Free Transfer", year: "2023" },
      { from: "Juventus", to: "Manchester United", fee: "€17M", year: "2021" },
    ],
    similarPlayers: ["Harry Kane", "Robert Lewandowski", "Karim Benzema"],
  },

  bellingham: {
    name: "Jude Bellingham",
    club: "Real Madrid",
    position: "Midfielder",
    nation: "England",
    age: "23",
    shirt: "#5",
    rating: "9.1",
    goals: "18",
    assists: "10",
    matches: "36",
    minutes: "3,050",
    marketValue: "€180M",
    preferredFoot: "Right",
    height: "186 cm",
    summary:
      "Bellingham is a complete modern midfielder with elite physicality, ball-carrying, goal threat, and leadership. He can impact every phase of the game.",
    strengths: ["Ball carrying", "Work rate", "Finishing", "Leadership"],
    weaknesses: ["Risky tackles", "Can overcommit forward"],
    previousClubs: ["Borussia Dortmund", "Birmingham City"],
    transfers: [
      { from: "Borussia Dortmund", to: "Real Madrid", fee: "€103M", year: "2023" },
      { from: "Birmingham City", to: "Borussia Dortmund", fee: "€25M", year: "2020" },
    ],
    similarPlayers: ["Jamal Musiala", "Pedri", "Federico Valverde"],
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

      <Text style={styles.sectionTitle}>Overview</Text>

      <View style={styles.infoGrid}>
        <InfoBox label="Age" value={player.age} />
        <InfoBox label="Nation" value={player.nation} />
        <InfoBox label="Position" value={player.position} />
        <InfoBox label="Shirt" value={player.shirt} />
        <InfoBox label="Foot" value={player.preferredFoot} />
        <InfoBox label="Height" value={player.height} />
        <InfoBox label="Value" value={player.marketValue} />
        <InfoBox label="Club" value={player.club} />
      </View>

      <Text style={styles.sectionTitle}>Season Stats</Text>

      <View style={styles.statsGrid}>
        <StatBox label="Goals" value={player.goals} />
        <StatBox label="Assists" value={player.assists} />
        <StatBox label="Matches" value={player.matches} />
        <StatBox label="Minutes" value={player.minutes} />
      </View>

      <Text style={styles.sectionTitle}>AI Scouting Report</Text>

      <View style={styles.aiCard}>
        <Text style={styles.aiTitle}>PlayerIndex Analysis</Text>
        <Text style={styles.aiText}>{player.summary}</Text>
      </View>

      <Text style={styles.sectionTitle}>Strengths</Text>

      {player.strengths.map((strength) => (
        <TagCard key={strength} text={strength} type="positive" />
      ))}

      <Text style={styles.sectionTitle}>Weaknesses</Text>

      {player.weaknesses.map((weakness) => (
        <TagCard key={weakness} text={weakness} type="neutral" />
      ))}

      <Text style={styles.sectionTitle}>Career History</Text>

      {player.previousClubs.map((club) => (
        <View style={styles.card} key={club}>
          <Text style={styles.cardTitle}>{club}</Text>
          <Text style={styles.cardSubtitle}>Previous club</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Transfers</Text>

      {player.transfers.map((transfer) => (
        <View
          style={styles.transferCard}
          key={`${transfer.from}-${transfer.to}-${transfer.year}`}
        >
          <Text style={styles.transferYear}>{transfer.year}</Text>
          <Text style={styles.transferTitle}>
            {transfer.from} → {transfer.to}
          </Text>
          <Text style={styles.transferFee}>{transfer.fee}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Similar Players</Text>

      {player.similarPlayers.map((similarPlayer) => (
        <View style={styles.card} key={similarPlayer}>
          <Text style={styles.cardTitle}>{similarPlayer}</Text>
          <Text style={styles.cardSubtitle}>Similar playing profile</Text>
        </View>
      ))}

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

function TagCard({
  text,
  type,
}: {
  text: string;
  type: "positive" | "neutral";
}) {
  return (
    <View style={type === "positive" ? styles.strengthCard : styles.weaknessCard}>
      <Ionicons
        name={type === "positive" ? "checkmark-circle" : "alert-circle"}
        size={20}
        color={type === "positive" ? "#00C853" : "#FFD700"}
      />
      <Text style={styles.tagText}>{text}</Text>
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
    fontSize: 18,
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

  strengthCard: {
    backgroundColor: "#102418",
    borderRadius: 18,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#00C853",
    flexDirection: "row",
    alignItems: "center",
  },

  weaknessCard: {
    backgroundColor: "#241F10",
    borderRadius: 18,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#FFD700",
    flexDirection: "row",
    alignItems: "center",
  },

  tagText: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 10,
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

  transferCard: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
  },

  transferYear: {
    color: "#00C853",
    fontSize: 14,
    fontWeight: "900",
  },

  transferTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 8,
  },

  transferFee: {
    color: "#AAAAAA",
    fontSize: 14,
    marginTop: 6,
  },

  bottomSpace: {
    height: 50,
  },
});