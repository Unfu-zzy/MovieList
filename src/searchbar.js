import React from 'react';

const Searchmovie = (props) => { 

    return( 
        <div className='movielist'>
            <label for="Search">Search for a Movie</label>
            <br></br>
            <input
                className='movieinput'
                value={props.value}  
                onChange={(event) => props.setSearch(event.target.value)}
                placeholder="Search"  
                name="Search"  
           />

        </div>
    )
}

export default Searchmovie;