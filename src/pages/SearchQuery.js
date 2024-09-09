import React from 'react';
import { default as Card } from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { Store } from '../store.js';

export const SearchQuery = (props) => {
    const search = useParams();
    //console.log(search);
    const { data: movies } = useFetch(`https://api.themoviedb.org/3/${props.apiPath}?api_key=${Store.api_key}&query=${search.query}`);
    useTitle(search.query);    

    return(
        <main>
            <div className='my-5'>
                {
                    movies.length === 0 ? `Zero results found for ${search.query}.` : `Search results for ${search.query}.`
                }
            </div>
            
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

export default SearchQuery;