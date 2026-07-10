import LeagueCard from "@/components/cards/LeagueCard";
import PlayerCard from "@/components/cards/PlayerCard";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const players = [
  {
    id: "mbappe",
    name: "Kylian Mbappé",
    club: "Real Madrid",
    position: "Forward",
    rating: "9.2",
  },
  {
    id: "yamal",
    name: "Lamine Yamal",
    club: "Barcelona",
    position: "Winger",
    rating: "8.9",
  },
  {
    id: "haaland",
    name: "Erling Haaland",
    club: "Manchester City",
    position: "Striker",
    rating: "9.0",
  },
  {
    id: "messi",
    name: "Lionel Messi",
    club: "Inter Miami",
    position: "Forward",
    rating: "8.8",
  },
  {
    id: "ronaldo",
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    position: "Forward",
    rating: "8.6",
  },
  {
    id: "bellingham",
    name: "Jude Bellingham",
    club: "Real Madrid",
    position: "Midfielder",
    rating: "9.1",
  },
];

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const filteredPlayers = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) {
      return players;
    }

    return players.filter((player) => {
      return (
        player.name.toLowerCase().includes(search) ||
        player.club.toLowerCase().includes(search) ||
        player.position.toLowerCase().includes(search)
      );
    });
  }, [query]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Search</Text>

      <Text style={styles.subtitle}>
        Find players, clubs, leagues, and competitions.
      </Text>

      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" />

        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search players..."
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      <Text style={styles.sectionTitle}>
        {query ? `Results for "${query}"` : "Suggested Players"}
      </Text>

      {filteredPlayers.length > 0 ? (
        filteredPlayers.map((player) => (
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
          <Text style={styles.emptyTitle}>No players found</Text>
          <Text style={styles.emptyText}>
            Try searching for another player, club, or position.
          </Text>
        </View>
      )}

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

  searchBar: {
    backgroundColor: "#1B1B1B",
    height: 56,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    marginTop: 22,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#242424",
  },

  input: {
    color: "white",
    marginLeft: 12,
    flex: 1,
    fontSize: 16,
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