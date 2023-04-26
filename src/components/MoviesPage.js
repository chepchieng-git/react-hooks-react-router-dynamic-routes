import React from "react";
// import the custom `useRouteMatch hook from React Router
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
//import the MovieSHow component
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  //useRouteMatch return a special object with information about the current matched route
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <MoviesList movies={movies} />

      {/*  Adding code to show a message to the user to select a movie 
    if they haven't yet*/}
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>

      {/* we can use the current URL from the `match` object as part of this
      will generate a url like "/movies/:movieId"*/}
      <Route path={`${match.url}/:movieId`}>
        {/*  adding the movies object as a prop to MovieShow */}
        <MovieShow movies={movies} />
      </Route>
    </div>
  );
}
export default MoviesPage;

// We only have the one parameter, movieId, which we defined 
// in the <Route> in MoviesPage