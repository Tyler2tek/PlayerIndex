import LeagueCard from "@/components/cards/LeagueCard";
import MatchCard from "@/components/cards/MatchCard";
import PlayerCard from "@/components/cards/PlayerCard";
import { useFavoritesStore } from "@/store/favoritesStore";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  const favoritePlayers = useFavoritesStore((state) => state.favoritePlayers);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Favorites</Text>

      <Text style={styles.subtitle}>
        Follow your favorite players, clubs, leagues, and matches in one place.
      </Text>

      <Text style={styles.sectionTitle}>Favorite Players</Text>

      {favoritePlayers.length > 0 ? (
        favoritePlayers.map((player) => (
          <PlayerCard
            key={player.id}
            id={player.id}
            name={player.name}
            club={player.club}
            position={player.position}
            rating={player.rating}
          />
        ))
      ) : (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyTitle}>No favorite players yet</Text>
          <Text style={styles.emptyText}>
            Tap the ⭐ on any player card to add them here.
          </Text>
        </View>
      )}

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
          PlayerIndex will send alerts for goals, assists, lineups, injuries,
          transfers, and breaking news from your favorite players.
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

  emptyBox: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "#242424",
  },

  emptyTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "800",
  },

  emptyText: {
    color: "#888",
    fontSize: 14,
    marginTop: 6,
    lineHeight: 20,
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