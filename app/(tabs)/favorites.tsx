import LeagueCard from "@/components/cards/LeagueCard";
import MatchCard from "@/components/cards/MatchCard";
import PlayerCard from "@/components/cards/PlayerCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Favorites</Text>

      <Text style={styles.subtitle}>
        Follow your favorite players, clubs, leagues, and matches in one place.
      </Text>

      <Text style={styles.sectionTitle}>Favorite Players</Text>

      <PlayerCard
        name="Lamine Yamal"
        club="Barcelona"
        position="Winger"
        rating="8.9"
      />

      <PlayerCard
        name="Jude Bellingham"
        club="Real Madrid"
        position="Midfielder"
        rating="9.1"
      />

      <Text style={styles.sectionTitle}>Favorite Competitions</Text>

      <LeagueCard name="Premier League" country="England" icon="trophy" />
      <LeagueCard name="UEFA Champions League" country="Europe" icon="star" />

      <Text style={styles.sectionTitle}>Tracked Matches</Text>

      <MatchCard
        competition="MLS"
        homeTeam="Inter Miami"
        awayTeam="LAFC"
        status="Sat 8:30 PM"
      />

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Coming Soon</Text>
        <Text style={styles.infoText}>
          You’ll be able to favorite any player, club, league, or match. 
          PlayerIndex will send alerts for goals, assists, lineups, injuries, 
          transfers, and breaking news.
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