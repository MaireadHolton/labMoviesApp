import React, { useContext } from "react";
import { TvContext } from "../../contexts/tvContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TvContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    context.addToFavourites(tvShow);
  };
  return (
    <IconButton aria-label="add to tv favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;