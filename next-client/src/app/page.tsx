"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import axios from "axios";
import { create } from "zustand";
import Movies from "../components/Movies";
export default function Home() {
  const fetchMovies = async () => {
    console.log(process.env.TMDB_API_KEY, process.env);
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    console.log(res.data.results);
    return res.data.results;
  };

  const useMovieStore = create((set) => ({
    movies: [],
    fetchMovies: async () => {
      const movies = await fetchMovies();
      set({ movies });
    },
  }));
  return (
    <main>
      <Navbar />
      <Movies movieStore={useMovieStore} />
    </main>
  );
}
