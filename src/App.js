import React from 'react';
import {useEffect, useState} from 'react';
import Searchmovie from './searchbar.js';
import './App.css';
import MovieList from './movieList'


const App = () => { 
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

const Requestmovie = async() => {
        
            const url = `http://www.omdbapi.com/?s=${search}&apikey=9cda00b8`;
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);

            if(json.Search) { 
            setMovies(json.Search);
            };

            if(json.Search.length > 9) {
                return ( 
                    <h1>Too many results!</h1>
                )
            } 
}
    useEffect(() => {
        Requestmovie(search);
    },[search]);
     return (
    <>
            <div className='searchbar'>
               <Searchmovie search={search} setSearch={setSearch}/>
            </div>


            <div className='movies'>
                <MovieList movies={movies}/>
            </div>
    </>   
    );
    
};


export default App;
