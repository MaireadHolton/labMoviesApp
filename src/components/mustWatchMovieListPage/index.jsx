import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";

import MovieList from "../movieList";

const styles = {
  root: {
    padding: "20px",
  },
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({ movies, title, action }) {

  let displayedMovies = movies

  return (
   <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title={title} />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList action={action} movies={displayedMovies}
          />
        </Grid>
      </Grid>
    </>  
  );
}
export default MovieListPageTemplate;