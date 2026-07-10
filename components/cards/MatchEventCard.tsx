import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

type MatchEventCardProps = {
  minute: string;
  player: string;
  team: string;
  type: "goal" | "assist" | "yellow" | "red" | "substitution";
};

export default function MatchEventCard({
  minute,
  player,
  team,
  type,
}: MatchEventCardProps) {
  const eventInfo = getEventInfo(type);

  return (
    <View style={styles.card}>
      <View style={styles.minuteBox}>
        <Text style={styles.minute}>{minute}</Text>
      </View>

      <View style={styles.iconBox}>
        <Ionicons name={eventInfo.icon} size={22} color={eventInfo.color} />
      </View>

      <View style={styles.info}>
        <Text style={styles.player}>{player}</Text>
        <Text style={styles.team}>{team}</Text>
      </View>

      <Text style={[styles.type, { color: eventInfo.color }]}>
        {eventInfo.label}
      </Text>
    </View>
  );
}

function getEventInfo(type: MatchEventCardProps["type"]) {
  switch (type) {
    case "goal":
      return {
        icon: "football" as const,
        color: "#00C853",
        label: "Goal",
      };

    case "assist":
      return {
        icon: "flash" as const,
        color: "#00C853",
        label: "Assist",
      };

    case "yellow":
      return {
        icon: "square" as const,
        color: "#FFD700",
        label: "Yellow",
      };

    case "red":
      return {
        icon: "square" as const,
        color: "#FF3B30",
        label: "Red",
      };

    case "substitution":
      return {
        icon: "swap-horizontal" as const,
        color: "#AAAAAA",
        label: "Sub",
      };
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#242424",
    flexDirection: "row",
    alignItems: "center",
  },

  minuteBox: {
    width: 44,
  },

  minute: {
    color: "white",
    fontSize: 15,
    fontWeight: "800",
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#102418",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  player: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },

  team: {
    color: "#888",
    fontSize: 13,
    marginTop: 4,
  },

  type: {
    fontSize: 13,
    fontWeight: "800",
  },
});