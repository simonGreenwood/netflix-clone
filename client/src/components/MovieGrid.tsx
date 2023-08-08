import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Movie {
  title: string;
  backdrop_path: string;
  vote_average: number;
}

const MovieGrid = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState(true);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=ffedbc363fc1a3d8730f9435430057f8"
      )
      .then((res) => {
        setData(res.data["results"]);
        setLoading(false);
      });
  }, []);

  return (
    <Center>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4, xl: 6 }}
        spacing={6}
        marginY={600}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GridItem key={skeleton}>
              <MovieCardSkeleton></MovieCardSkeleton>
            </GridItem>
          ))}
        {data?.map((movie) => (
          <GridItem key={movie.title} padding={0}>
            <MovieCard
              vote_average={movie.vote_average}
              image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              title={movie.title}
            ></MovieCard>
          </GridItem>
        ))}
      </SimpleGrid>
    </Center>
  );
};

export default MovieGrid;
