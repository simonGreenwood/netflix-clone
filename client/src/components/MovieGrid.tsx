import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { GridItem, SimpleGrid } from "@chakra-ui/react";

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
    <>
      <SimpleGrid columns={3} spacing={0}>
        {data?.map((movie) => (
          <GridItem key={movie.title} padding={0}>
            {" "}
            {/* Set padding to 0 */}
            <MovieCard title={movie.title} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MovieGrid;
