import fetch from "cross-fetch";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY || "";
const BASE = "https://api.themoviedb.org/3";

async function tmdbGet(path: string, params: Record<string, string> = {}) {
  const url = new URL(`${BASE}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`TMDB API Error: ${res.status} ${res.statusText}`);
  return res.json();
}

export async function getCategory(category: string) {
  
  switch (category) {
    case "popular":
      return tmdbGet("/movie/popular");
    case "top_rated":
      return tmdbGet("/movie/top_rated");
    case "upcoming":
      return tmdbGet("/movie/upcoming");
    default:
      return tmdbGet("/movie/popular");
  }
}

export async function getMovie(_category?: string, id?: string) {
  if (!id) throw new Error("Movie ID is required");
  return tmdbGet(`/movie/${id}`);
}

export function posterPath(path: string | null) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : "";
}
