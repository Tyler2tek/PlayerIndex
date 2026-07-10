const API_KEY = process.env.EXPO_PUBLIC_API_FOOTBALL_KEY;

const BASE_URL = "https://v3.football.api-sports.io";

async function apiFootballRequest(endpoint: string) {
  if (!API_KEY) {
    throw new Error("Missing API-Football key. Check your .env file.");
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "x-apisports-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`API-Football request failed: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getLeagues() {
  return apiFootballRequest("/leagues");
}

export async function getTeamsByLeague(leagueId: number, season: number) {
  return apiFootballRequest(`/teams?league=${leagueId}&season=${season}`);
}

export async function getPlayersByTeam(teamId: number) {
  return apiFootballRequest(`/players/squads?team=${teamId}`);
}

export async function searchPlayers(playerName: string) {
  return apiFootballRequest(`/players/profiles?search=${playerName}`);
}

export async function getPlayerProfileById(playerId: string | number) {
  return apiFootballRequest(`/players/profiles?player=${playerId}`);
}

export async function getPlayerStatsById(
  playerId: string | number,
  season: number
) {
  return apiFootballRequest(`/players?id=${playerId}&season=${season}`);
}

export async function getFixturesByDate(date: string) {
  return apiFootballRequest(`/fixtures?date=${date}`);
}

export async function getLiveFixtures() {
  return apiFootballRequest("/fixtures?live=all");
}