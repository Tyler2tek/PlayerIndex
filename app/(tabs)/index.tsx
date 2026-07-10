import LeagueCard from "@/components/cards/LeagueCard";
import MatchCard from "@/components/cards/MatchCard";
import PlayerCard from "@/components/cards/PlayerCard";
import SearchBar from "@/components/common/SearchBar";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.logo}>⚽ PlayerIndex</Text>

      <Text style={styles.greeting}>Good Evening, Tyler 👋</Text>

      <SearchBar />

      <Text style={styles.sectionTitle}>🔥 Trending Players</Text>

      <PlayerCard
        id="mbappe"
        name="Kylian Mbappé"
        club="Real Madrid"
        position="Forward"
        rating="9.2"
      />

      <PlayerCard
        id="yamal"
        name="Lamine Yamal"
        club="Barcelona"
        position="Winger"
        rating="8.9"
      />

      <PlayerCard
        id="haaland"
        name="Erling Haaland"
        club="Manchester City"
        position="Striker"
        rating="9.0"
      />

      <Text style={styles.sectionTitle}>⚽ Live Matches</Text>

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

      <MatchCard
        competition="UEFA Champions League"
        homeTeam="PSG"
        awayTeam="Bayern Munich"
        status="Tomorrow"
      />

      <Text style={styles.sectionTitle}>🏆 Top Competitions</Text>

      <LeagueCard name="Premier League" country="England" icon="trophy" />

      <LeagueCard name="LaLiga" country="Spain" icon="football" />

      <LeagueCard
        name="UEFA Champions League"
        country="Europe"
        icon="star"
      />

      <LeagueCard name="MLS" country="United States" icon="flag" />

      <Text style={styles.sectionTitle}>📰 Latest News</Text>

      <Text style={styles.newsCard}>
        Transfer news, injury updates, and AI summaries will appear here once
        live data is connected.
      </Text>

      <Text style={styles.bottomSpace}> </Text>
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

  logo: {
    color: "white",
    fontSize: 34,
    fontWeight: "800",
  },

  greeting: {
    color: "#AAAAAA",
    fontSize: 17,
    marginTop: 8,
  },

  sectionTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
    marginTop: 22,
    marginBottom: 14,
  },

  newsCard: {
    backgroundColor: "#1B1B1B",
    color: "#AAAAAA",
    borderRadius: 22,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
    fontSize: 15,
    lineHeight: 22,
  },

  bottomSpace: {
    height: 40,
  },
});