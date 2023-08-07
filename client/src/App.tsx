// import { useEffect } from "react";
import "./App.css";
// import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import MovieCardSkeleton from "./components/MovieCardSkeleton";

function App() {
  return (
    <Grid
      templateAreas={{
        base: "nav main",
        lg: "nav main",
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar></Navbar>
      </GridItem>
      <GridItem area="main">
        <MovieGrid></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
