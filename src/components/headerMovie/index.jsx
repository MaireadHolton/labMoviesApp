import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Card, CardHeader } from "@mui/material";
import { PanoramaFishEye } from "@mui/icons-material";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};


  // eslint-disable-next-line react-hooks/exhaustive-deps

const MovieHeader = (props) => {
  const movie = props.movie;
  const storedFavourite = JSON.parse(localStorage.getItem('favourites'));
  const foundMatch = false;
  for (var i = 0; i < storedFavourite.length; i+=1 ) {
    if (storedFavourite[i].id === movie.id) {
      foundMatch == true;
      console.log(storedFavourite[i].id);
    } else foundMatch == false;
  };

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      <CardHeader sx={styles.avatar}
        avatar = {foundMatch ? (
          <Avatar sx={styles.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null
        }
        />
      <Typography variant="h4" component="h3">
        {movie.title}{"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary"  fontSize="='large"/>
        </a>
        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
