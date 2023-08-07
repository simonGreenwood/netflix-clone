import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Center, GridItem, SimpleGrid } from "@chakra-ui/react";

interface Movie {
  title: string;
  backdrop_path: string;
}

const MovieGrid = () => {
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=ffedbc363fc1a3d8730f9435430057f8"
      )
      .then((res) => {
        setData(res.data["results"]);
      });
  }, []);

  return (
    <Center>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
        spacing={6}
        marginY={300}
      >
        {data?.map((movie) => (
          <GridItem key={movie.title} padding={0}>
            {" "}
            {/* Set padding to 0 */}
            <MovieCard
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
