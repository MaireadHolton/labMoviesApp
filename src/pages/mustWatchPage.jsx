import React, { useContext } from "react";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovies } from "../api/tmdb-api";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import Spinner from "../components/spinner";
import MovieList from "../components/MovieList";
import RemoveFromMustWatch from "../components/cardIcons/removeFromMustWatch";

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

const MustWatchMoviesPage = (props) => {
  const { mustWatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const mustWatchQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovies,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = mustWatchQueries.map((q) => q.data);

  return(
    <>
      <Grid container sx={styles.root}>
        <Grid item xs={12}>
          <Header title="Must Watch Movies" />
        </Grid>
        <Grid item container spacing={5}>
          <MovieList
           movies={movies}
           action={(movie) => {
            return (
              <>
                <RemoveFromMustWatch movie={movie} />
              </>
            );
           }}
          />
        </Grid>
      </Grid>
    </> 
  );
};

export default MustWatchMoviesPage;