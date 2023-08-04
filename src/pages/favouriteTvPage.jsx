import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromTvFavourites from "../components/cardIcons/removeFromTVFavourites";

const FavouriteTvPage = (props) => {
  const { favourites: showIds } = useContext(TvContext);

  // Create an array of queries and run them in parallel.
  const favouriteTvQueries = useQueries(
    showIds.map((showId) => {
      return {
        queryKey: ["show", { id: showId }],
        queryFn: getShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const shows = favouriteTvQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Favourite TV Shows"
      shows={shows}
      action={(show) => {
        return (
          <>
            <RemoveFromTvFavourites show={show} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvPage;