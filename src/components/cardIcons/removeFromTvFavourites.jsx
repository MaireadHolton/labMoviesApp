import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { TvContext } from "../../contexts/tvContext";

const RemoveFromTvFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TvContext);

  const onUserRequest = (e) => {
    e.preventDefault();
    context.removeFromTvFavourites(tvShow);
  };

return (
  <IconButton
    aria-label="remove from tv favourites"
    onClick={onUserRequest}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromTvFavouritesIcon;