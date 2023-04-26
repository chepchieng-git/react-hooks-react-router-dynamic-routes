import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//The movies prop has been passed from App to MoviePage, then to MoviesList
function MoviesList({movies}) {
    const renderMovies = Object.keys(movies).map((movieID) => (
        <li key={movieID}>
            <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
        </li>
    ))

    return <ul>{renderMovies}</ul>
}

export default MoviesList

// In MoviesList.js, iterate through the movies object 
// and create a dynamic Link for each movie using its id
// In MoviesPage.js, render <MoviesList>