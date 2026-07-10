import LeagueCard from "@/components/cards/LeagueCard";
import PlayerCard from "@/components/cards/PlayerCard";
import SearchBar from "@/components/common/SearchBar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Search</Text>

      <Text style={styles.subtitle}>
        Find players, clubs, leagues, and competitions.
      </Text>

      <SearchBar />

      <Text style={styles.sectionTitle}>Suggested Players</Text>

      <PlayerCard
        name="Lionel Messi"
        club="Inter Miami"
        position="Forward"
        rating="8.8"
      />

      <PlayerCard
        name="Cristiano Ronaldo"
        club="Al Nassr"
        position="Forward"
        rating="8.6"
      />

      <PlayerCard
        name="Jude Bellingham"
        club="Real Madrid"
        position="Midfielder"
        rating="9.1"
      />

      <Text style={styles.sectionTitle}>Popular Competitions</Text>

      <LeagueCard name="Premier League" country="England" icon="trophy" />

      <LeagueCard name="UEFA Champions League" country="Europe" icon="star" />

      <LeagueCard name="MLS" country="United States" icon="flag" />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Coming Soon</Text>
        <Text style={styles.infoText}>
          This search page will connect to API-Football so users can search
          every available professional player, club, league, and competition.
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