import { create } from "zustand";

export type FavoritePlayer = {
  id: string;
  name: string;
  club: string;
  position: string;
  rating: string;
};

type FavoritesStore = {
  favoritePlayers: FavoritePlayer[];
  addFavorite: (player: FavoritePlayer) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (player: FavoritePlayer) => void;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favoritePlayers: [],

  addFavorite: (player) => {
    const alreadyFavorite = get().favoritePlayers.some(
      (favorite) => favorite.id === player.id
    );

    if (alreadyFavorite) return;

    set((state) => ({
      favoritePlayers: [...state.favoritePlayers, player],
    }));
  },

  removeFavorite: (id) => {
    set((state) => ({
      favoritePlayers: state.favoritePlayers.filter(
        (player) => player.id !== id
      ),
    }));
  },

  isFavorite: (id) => {
    return get().favoritePlayers.some((player) => player.id === id);
  },

  toggleFavorite: (player) => {
    const alreadyFavorite = get().isFavorite(player.id);

    if (alreadyFavorite) {
      get().removeFavorite(player.id);
    } else {
      get().addFavorite(player);
    }
  },
}));