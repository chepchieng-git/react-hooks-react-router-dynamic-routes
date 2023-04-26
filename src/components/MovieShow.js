import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function MovieShow ({ movies }) {
    // call useParams to access the `params` from the url
    const params = useParams()
    console.log(params);
    
    return (
        <div>
            {/*  And here we access the `movieID` stored in `params` 
            to render information about selected movie */}
            <h3>{movies[params.movieId].title}</h3>
        </div>
    )
}

export default MovieShow