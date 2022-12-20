import React from 'react';
import './movielist.css'

const MovieList = (props) => { 
    return(
        <>
            {props.movies.map((movie,index)=> (
                <div className="movies">
                        <img src={movie.Poster} alt="movies"/>
                </div>
            ))}
        </>
    );

}

export default MovieList;