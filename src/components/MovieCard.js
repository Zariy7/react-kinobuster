import React from 'react';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import movie_poster from '../assets/movie.png';

function MovieCard(props) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 flex flex-col">
            <Link to={`https://www.themoviedb.org/movie/${props.movie.id}-${slugify(props.movie.title)}`}>
                <img className="rounded-t-lg" src={props.movie.poster_path ? `https://image.tmdb.org/t/p/original/${props.movie.poster_path}` : movie_poster} alt={props.movie.title} />
            </Link>
            <div className="p-5 flex-grow flex flex-col justify-between">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {props.movie.title} </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {props.movie.overview } </p>

                <Link to={`../movie/${props.movie.id}`} onClick={()=>window.scrollTo(0, 0)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;