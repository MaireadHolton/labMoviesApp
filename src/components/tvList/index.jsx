import React from "react";
import TvShow from "../tvCard";
import Grid from "@mui/material/Grid";

const TVList = ({tvShows, action }) => {
  let tvCards = tvShows.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <TvShow key={s.id} tvShow={s} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TVList;