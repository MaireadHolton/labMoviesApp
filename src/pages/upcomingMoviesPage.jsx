import React, { useContext } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import UpcomingMovieList from '../components/upcomingMovieList'; 
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

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discovery", getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const upcomingMovies = data ? data.results : [];

  return (
    <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title = 'Upcoming Movies' />
        </Grid>
        <Grid item container spacing={5}>
          <UpcomingMovieList
            upcomingMovies={upcomingMovies}
            action={(movie) => {
              return <AddToMustWatchIcon movie={movie} />
            }}
          />
        </Grid>
    </Grid>
  );
};

export default UpcomingMoviesPage;