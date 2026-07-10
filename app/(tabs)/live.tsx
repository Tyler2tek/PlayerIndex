import LeagueCard from "@/components/cards/LeagueCard";
import MatchCard from "@/components/cards/MatchCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function LiveScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Live Matches</Text>

      <Text style={styles.subtitle}>
        Follow live scores, events, lineups, and player ratings.
      </Text>

      <Text style={styles.sectionTitle}>Live Now</Text>

      <MatchCard
        competition="Premier League"
        homeTeam="Liverpool"
        awayTeam="Arsenal"
        homeScore={2}
        awayScore={1}
        status="LIVE"
      />

      <MatchCard
        competition="LaLiga"
        homeTeam="Barcelona"
        awayTeam="Real Madrid"
        homeScore={1}
        awayScore={1}
        status="72'"
      />

      <Text style={styles.sectionTitle}>Upcoming</Text>

      <MatchCard
        competition="UEFA Champions League"
        homeTeam="PSG"
        awayTeam="Bayern Munich"
        status="Tomorrow"
      />

      <MatchCard
        competition="MLS"
        homeTeam="Inter Miami"
        awayTeam="LAFC"
        status="Sat 8:30 PM"
      />

      <Text style={styles.sectionTitle}>Featured Competitions</Text>

      <LeagueCard name="Premier League" country="England" icon="trophy" />
      <LeagueCard name="LaLiga" country="Spain" icon="football" />
      <LeagueCard name="UEFA Champions League" country="Europe" icon="star" />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Coming Soon</Text>
        <Text style={styles.infoText}>
          This page will connect to API-Football for real live scores, match
          events, lineups, substitutions, cards, fixtures, and player ratings.
        </Text>
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

  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "800",
  },

  subtitle: {
    color: "#AAAAAA",
    fontSize: 16,
    marginTop: 8,
    lineHeight: 22,
  },

  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 14,
  },

  infoBox: {
    backgroundColor: "#102418",
    borderRadius: 22,
    padding: 18,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#00C853",
  },

  infoTitle: {
    color: "#00C853",
    fontSize: 18,
    fontWeight: "800",
  },

  infoText: {
    color: "#CCCCCC",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },

  bottomSpace: {
    height: 40,
  },
});