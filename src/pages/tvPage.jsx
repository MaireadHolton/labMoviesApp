import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvListPage";
import { getTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToTVFavourites";

const TVPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getTvShows);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const tvShows = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover TV shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesIcon tvShow={tvShow} />
      }}
    />
  );
};
export default TVPage;