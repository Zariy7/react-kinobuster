import React from 'react';
import { default as Card } from '../components/MovieCard';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
import { Store } from '../store.js';

export const MovieList = (props) => {
    //const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState();
    //console.log(props.apiPath);
    useTitle(props.title);
    //console.log(movies);
    const url = `https://api.themoviedb.org/3/${props.apiPath}?api_key=${Store.api_key}`;
    const { data: movies } = useFetch(`${url}&page=${page}`);
    console.log(Store);
    
    useEffect(() => {
        setPage(1);
    }, [props.apiPath]);

    useEffect(() => {
        setError(null);
    }, [page]);
    
    return (
        <main>
            <div name="error" className={error ? 'my-10 flex justify-center' : 'hidden'}>
                <span className='text-red-950 border-red-950 border bg-gray-700 rounded-md p-5'>
                    {error}
                </span>
            </div>
            <div className='flex flex-wrap justify-between my-5'>
                <button onClick={() => (page === 1 ? setError('You can\'t go any further back!') : setPage(page-1))}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                </button>
                <button onClick={() => (movies.length === 20 ? setPage(page+1) : setError('You can\'t go any further on!')) }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-wrap justify-evenly lg:grid lg:grid-cols-3">
                {
                    movies.map((movie)=>(
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
            </div>
        </main>
    )  
};