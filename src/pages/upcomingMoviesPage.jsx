import React, { useState, useEffect } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import { CardHeader } from "@mui/material";
import UpcomingMovieList from '../components/upcomingMovieList'; 
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";

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
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getUpcomingMovies().then(upcomingMovies =>{
      setUpcomingMovies(upcomingMovies);
      console.log(upcomingMovies);
    });
  }, []);

  return (
    <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title = 'Upcoming Movies' />
        </Grid>
        <Grid item container spacing={5}>
          <UpcomingMovieList
            upcomingMovies={upcomingMovies}
          />
        </Grid>
    </Grid>
  );
};

export default UpcomingMoviesPage;