import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=ffedbc363fc1a3d8730f9435430057f8"
      )
      .then((res) => console.log(res.data));
  }, []);

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
        <NavBar>
      </GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
}

export default App;
