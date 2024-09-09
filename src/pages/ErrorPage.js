import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

export const ErrorPage = (props) => {
    useTitle('404');

    return(
        <main>
            <div>
                <h1 className='text-7xl my-7 font-bold'>Nope! Page not found.</h1>
                <button className='border border-blue-300 rounded-lg bg-yellow-50 px-5'>
                    <NavLink to="/">Home</NavLink>
                </button>
            </div>
        </main>    
    )
};