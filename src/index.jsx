import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import TvContextProvider from "./contexts/tvContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TopMoviesPage from './pages/topMoviesPage';
import MustWatchPage from './pages/mustWatchPage';
import FantasyMoviePage from './pages/fantasyMoviePage';
import TVPage from './pages/tvPage';
import FavouriteTvPage from './pages/favouriteTvPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
       <SiteHeader />
        <TvContextProvider>
        <MoviesContextProvider>
         <Routes>
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/top" element={<TopMoviesPage/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/reviews/:id" element={<MovieReviewPage/>} />
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
          <Route path="/movies/mustWatch" element={<MustWatchPage/>} />
          <Route path="/fantasyMoviePage" element={<FantasyMoviePage/>} />
          <Route path="/tvshows" element={<TVPage/>} />
          <Route path="/tvshows/favourites" element={<FavouriteTvPage/>} />
         </Routes>
       </MoviesContextProvider>
       </TvContextProvider>
      </BrowserRouter>
     <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);

