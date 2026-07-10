import LeagueCard from "@/components/cards/LeagueCard";
import PlayerCard from "@/components/cards/PlayerCard";
import { searchPlayers } from "@/services/apiFootball";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

type PlayerResult = {
  id: string;
  name: string;
  club: string;
  position: string;
  rating: string;
};

const samplePlayers: PlayerResult[] = [
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
  const [apiPlayers, setApiPlayers] = useState<PlayerResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const localResults = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) {
      return samplePlayers;
    }

    return samplePlayers.filter((player) => {
      return (
        player.name.toLowerCase().includes(search) ||
        player.club.toLowerCase().includes(search) ||
        player.position.toLowerCase().includes(search)
      );
    });
  }, [query]);

  useEffect(() => {
    const search = query.trim();

    if (search.length < 3) {
      setApiPlayers([]);
      setApiError("");
      setLoading(false);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setApiError("");

        const data = await searchPlayers(search);

        const realPlayers: PlayerResult[] =
          data?.response?.map((item: any) => {
            const player = item.player;

            return {
              id: String(player?.id ?? player?.name ?? Math.random()),
              name: player?.name ?? "Unknown Player",
              club: "Club data coming soon",
              position: "Player",
              rating: "N/A",
            };
          }) ?? [];

        setApiPlayers(realPlayers);
      } catch (error) {
        console.log("API-Football search error:", error);
        setApiError("Could not load real API results yet. Showing sample data.");
        setApiPlayers([]);
      } finally {
        setLoading(false);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [query]);

  const resultsToShow = apiPlayers.length > 0 ? apiPlayers : localResults;

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
          autoCapitalize="none"
        />
      </View>

      {loading && <Text style={styles.loadingText}>Searching API-Football...</Text>}

      {apiError ? <Text style={styles.errorText}>{apiError}</Text> : null}

      <Text style={styles.sectionTitle}>
        {query ? `Results for "${query}"` : "Suggested Players"}
      </Text>

      {resultsToShow.length > 0 ? (
        resultsToShow.map((player) => (
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
        <Text style={styles.infoTitle}>API-Football Connected</Text>
        <Text style={styles.infoText}>
          Search now attempts to load real player data from API-Football. Sample
          players still appear as a backup while we build the full database.
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

  loadingText: {
    color: "#00C853",
    fontSize: 14,
    marginTop: 8,
  },

  errorText: {
    color: "#FFD700",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
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