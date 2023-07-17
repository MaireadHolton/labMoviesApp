import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Header from "../components/headerMovieList";
import { useForm, Controller } from "react-hook-form";


const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  headerText: {
    fontWeight: "bold",
    display: "flex",
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    font: "arial",
    lineHeight: 2.5,
    padding: 1.5,
    color:"white",
    backgroundColor: "#1569C7",
  },
  inputText:{
    display: "inline",
    justifyContent: "center",
    alignItems: "center",
    float: "center",
    font: "arial",
    fontSize: 20,
    lineHeight: 2,
    padding: 3,
    color:"#1569C7",
  },
  form:{
    border: "2px solid #1569C7",
    borderRadius: 20,
    borderSpacing: 30,
    display: "inline",
    fontSize: 20,
    color:"#1569C7",
    justifyContent: "center",
    alignItems: "center",
    float: "center",
    padding: 3,
  }
};

function FantasyMoviePage() {
  const [fantasyMovie, setFantasyMovie] = useState([
    {title: "myMovie", overview: "greatest movie", genre: "fantasy", release: "2024", duration: 130, company: "Universal Studios"},
  ])

  

  return(
    <>
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title="Create your fantasy Movie" />
      </Grid>
      <Grid item container spacing={1}>
      <FantasyMovieForm setFantasyMovie={setFantasyMovie} />
      <div class ="ui relaxed divided list">
        {fantasyMovie.map(movie => <Movie title={movie.title} overview={movie.overview} genre={movie.genre} release={movie.release} duration={movie.duration} company={movie.company}/>)}
      </div>
      </Grid>
      </Grid>
      </>
  )
}

const FantasyMovieForm = (props) => {
  const [title, setTitle] = useState()
  const [overview, setOverview] = useState()
  const [genre, setGenre] =useState()
  const [release, setRelease] = useState()
  const [duration, setDuration] = useState()
  const [company, setCompany] = useState()

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setFantasyMovie(prev => prev.concat({title, overview, genre, release, duration, company}));
    setTitle("")
    setOverview("")
    setGenre("")
    setRelease("")
    setDuration("")
    setCompany("")

  }

  return(
    <div class= "form-box" style={styles.form}>
      <form class="form" onSubmit={handleSubmit}>
      <label>Enter your Movie Title:
        <input
          value={title}
          type="text" 
          onChange={e => setTitle(e.target.value)} placeholder="Title"
        />
      </label>
      <label> Enter your Movie Overview:
        <input
         value={overview}
         type="text" 
         onChange={e => setOverview(e.target.value)} placeholder="Overview"
       />
      </label>
      <label> Enter your Movie Genre: </label>
        <select class="ui fluid dropdown" onChange={e => setGenre(e.target.value)}>
         <option value="" >Genre</option>
         <option value="Action">Action</option>
         <option value="Adventure">Adventure</option>
         <option value="Comedy">Comedy</option>
         <option value="Crime">Crime</option>
         <option value="Documentary">Documentary</option>
         <option value="Drama">Drama</option>
         <option value="Family">Family</option>
         <option value="Fantasy">Fantasy</option>
         <option value="History">History</option>
         <option value="Horror">Horror</option>
         <option value="Music">Music</option>
         <option value="Mystery">Mystery</option>
         <option value="Romance">Romance</option>
         <option value="Science Fiction">Science Fiction</option>
         <option value="Thriller">Thriller</option>
         <option value="War">War</option>
         <option value="Western">Western</option>
        </select>
      <label> Enter your Movie Release year:
      <input
          value={release}
          type="number" 
          onChange={e => setRelease(e.target.value)} placeholder="Release"
        />
      </label>
      <label> Enter your Movie run time in minutes:
      <input
          value={duration}
          type="number" 
          onChange={e => setDuration(e.target.value)} placeholder="Duration"
        />
      </label>
      <div class="field">
      <label> Enter your Movie Production Company: </label>
        <select class="ui fluid dropdown" onChange={e => setCompany(e.target.value)}>
         <option value="" >Company</option>
         <option value="Universal Studios" >Universal Studios</option>
         <option value="Disney">Disney</option>
         <option value="Miramax">Miramax</option>
         <option value="Dreamworks">Dreamworks</option>
         <option value="Lionsgate">Lionsgate</option>
         <option value="Warner Brothers">Warner Brothers</option>
         <option value="Paramount Pictures">Paramount Pictures</option>
         <option value="20th Century Studios">20th Century Studios</option>
         <option value="Metro-Goldwyn-Mayer">Metro-Goldwyn-Mayer</option>
         <option value="Sony Pictures">Sony Pictures</option>
        </select>
      </div>
      <input type="submit" />
    </form>
    </div>
  )
}

function Movie(props) {
  return (
   <div class="ui card">
    <div class="image">
      <img src="src/images/fantasyMovie.png" width="flex" height="flex"></img>
    </div>
    <div class="content">
     <div class ="header" style={styles.headerText}> Title: {props.title}</div>
     <div class="list" style={styles.inputText}>
      <div class="item"> My overview: {props.overview}</div>
      <div class="item"> Movie Genre: {props.genre}</div> 
      <div class="item"> Run time in minutes: {props.duration}</div> 
      <div class="item"> Release year: {props.release}</div> 
      <div class="item"> Production Company: {props.company}</div> 
    </div>
    </div>
    </div> 
    )
}

export default FantasyMoviePage;