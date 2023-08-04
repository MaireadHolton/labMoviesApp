import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateTvListPage";
import { getShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToTVFavourites";

const TVPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("discover", getShows);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const shows = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover TV shows"
      shows={shows}
      action={(show) => {
        return <AddToFavouritesIcon show={show} />
      }}
    />
  );
};
export default TVPage;