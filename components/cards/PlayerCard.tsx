import { useFavoritesStore } from "@/store/favoritesStore";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type PlayerCardProps = {
  id?: string;
  name: string;
  club: string;
  position: string;
  rating?: string;
};

export default function PlayerCard({
  id = "1",
  name,
  club,
  position,
  rating = "8.7",
}: PlayerCardProps) {
  const isFavorite = useFavoritesStore((state) => state.isFavorite(id));
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.75, transform: [{ scale: 0.98 }] },
      ]}
      onPress={() => router.push(`/player/${id}`)}
    >
      <View style={styles.avatar}>
        <Ionicons name="person" size={28} color="#00C853" />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>
          {club} • {position}
        </Text>
      </View>

      <View style={styles.rightSide}>
        <View style={styles.ratingBox}>
          <Text style={styles.rating}>{rating}</Text>
        </View>

        <Pressable
          style={styles.favoriteButton}
          onPress={(event) => {
            event.stopPropagation();

            toggleFavorite({
              id,
              name,
              club,
              position,
              rating,
            });
          }}
        >
          <Ionicons
            name={isFavorite ? "star" : "star-outline"}
            size={22}
            color={isFavorite ? "#FFD700" : "#888"}
          />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1B1B1B",
    borderRadius: 22,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#242424",
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#102418",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  info: {
    flex: 1,
  },

  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  details: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
  },

  rightSide: {
    alignItems: "center",
    gap: 8,
  },

  ratingBox: {
    backgroundColor: "#00C853",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  rating: {
    color: "#001B0A",
    fontWeight: "800",
    fontSize: 14,
  },

  favoriteButton: {
    padding: 4,
  },
});