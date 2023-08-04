import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromTvFavourites from "../components/cardIcons/removeFromTVFavourites";

const FavouriteTvPage = (props) => {
  const { favourites: tvShowIds } = useContext(TvContext);

  // Create an array of queries and run them in parallel.
  const favouriteTvQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((s) => s.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvQueries.map((q) => q.data);

  return (
    <PageTemplate
      title="Favourite TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromTvFavourites tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvPage;