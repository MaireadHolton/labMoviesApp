import React, { useState } from "react";

export const TvContext = React.createContext(null);

const TvContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (tvShow) => {
        let updatedFavourites = [...favourites];
        if (!setFavourites.includes(tvShow.id)) {
          updatedFavourites.push(tvShow.id);
        }
        setFavourites(updatedFavourites);
      };

      const removeFromTvFavourites = (tvShow) => {
        setFavourites(favourites.filter((sId) => sId !== tvShow.id));
      };

      return (
        <TvContext.Provider
          value={{
            favourites,
            addToFavourites,
            removeFromTvFavourites
          }}
          >
            {props.children}
            </TvContext.Provider>
          );
        };

        
        export default TvContextProvider;
        