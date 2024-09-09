import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTitle } from '../hooks/useTitle';
import { Carousel } from "flowbite-react";
import { Store } from '../store.js';

export const Home = (props) => {
    const [data, setData] = useState({});
    useTitle('Home');
    //const [active, setActive] = useState(0);

    useEffect(() => {
        async function getGenres(){
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${Store.api_key}`);
            const json = await response.json();
            setData(json);
        }
        
        getGenres();
    }, []);

    return(
        <main>
            <div className="h-56 my-5">
                <Carousel slideInterval={5000} pauseOnHover>
                    {
                        data.genres && data.genres.map((genre, i)=>(
                            <Link to={{ pathname: `discover-genres/${genre.id}`, state: genre.name}} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img src={ require(`../assets/${genre.name}.jpg`) } alt={genre.name} className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{genre.name}</h5>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
        </main>
    )
}