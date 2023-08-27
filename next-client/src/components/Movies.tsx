import { useEffect } from "react";
import MovieCard from "./MovieCard";
interface Props {
  movieStore: any;
}
export default function Movies(props: Props) {
  const { fetchMovies, movies } = props.movieStore((state: any) => ({
    fetchMovies: state.fetchMovies,
    movies: state.movies,
  }));
  useEffect(() => {
    fetchMovies();
  });
  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
