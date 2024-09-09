import React from 'react';
//import { useState, useEffect } from 'react';
//import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { useFetch } from '../hooks/useFetch';
import { default as Card } from '../components/MovieCard';
import { Store } from '../store.js';

export const DiscoverGenres = (props) => {
    useTitle('Genres');
    const params = useParams();
    //console.log(params.id);
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${Store.api_key}&with_genres=${params.id}`;
    const { data: movies } = useFetch(`${url}`);
    //console.log(props.location);

    return(
        <main>
            <div className="flex flex-wrap justify-evenly lg:grid lg:grid-cols-3">
                {
                    movies && movies.map((movie)=>(
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </main>
    )
};