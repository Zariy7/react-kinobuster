import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { Store } from '../store.js';

export const MovieDetail = (props) => {
    const params = useParams();
    const [data, setData] = useState({});
    //console.log(params.id);

    useEffect(() => {
        async function getMovie(){
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${Store.api_key}`);
            const json = await response.json();
            setData(json);
        }
        
        getMovie();
    }, [params.id]);

    useTitle(data.original_title);

    //console.log(data);
    
    return(
        <div className='flex flex-wrap lg:flex-nowrap'>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5 flex flex-col">
                <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt={data.original_title} />
            </div>
            <div className='m-5'>
                <h1>{data.original_title}</h1>
                <div className='my-5 flex flex-wrap lg:flex-nowrap'>
                    {
                        data.genres && data.genres.map((genre)=>(
                            <div className='p-3 mx-3 border border-gray-200 dark:border-gray-600 rounded' key={genre.id}>
                                {genre.name}
                            </div>
                        ))
                    }
                </div>
                <p>
                    Summary: {data.overview}
                </p>
                

                <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="ms-2 text-gray-900">{data.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <div className="text-gray-900 underline hover:no-underline">{data.vote_count} reviews</div>
                </div>

                <div>
                    Release: {data.release_date}
                </div>

            </div>
        </div>    
    )
};