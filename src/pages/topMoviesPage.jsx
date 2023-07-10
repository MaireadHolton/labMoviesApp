import React, { useContext } from "react";
import { getTopMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import TopMovieList from '../components/topMovieList';
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import Spinner from "../components/spinner";
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const styles = {
    root: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      padding: 1.5,
    },
  };

const TopMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discovery", getTopMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const topMovies = data ? data.results : [];

  return (
    <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title = 'Top Rated Movies' />
        </Grid>
        <Grid item container spacing={5}>
          <TopMovieList
            topMovies={topMovies}
            action={(movie) => {
              return <AddToMustWatchIcon movie={movie} />
            }}
          />
        </Grid>
    </Grid>
  );
};
export default TopMoviesPage;