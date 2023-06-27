import React from "react";
import Movie from "../upcomingMovieCard/";
import Grid from "@mui/material/Grid";

const UpcomingMovieList = (props) => {
  let movieCards = props.upcomingMovies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Movie key={m.id} movie={m}/>
    </Grid>
  ));
  return movieCards;
};

export default UpcomingMovieList;