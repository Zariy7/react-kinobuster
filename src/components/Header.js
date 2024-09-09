import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/kino-logo.png';

const activeC = 'block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white';
const inactiveC = 'block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700';

export const Header = () => {
    const [hidden, setHidden] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const query = event.target.search.value;
        event.target.reset();
        return navigate(`/search/${query}`);
    }

    return(
        <header>
            <nav className="bg-blue-100 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink href="https://flowbite.com" className="flex items-center">
                        <img src={Logo} className="size-12" alt="Kino Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kinobuster</span>
                    </NavLink>

                    <div className={`${ hidden ? "" : "hidden" } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink /* to="/" */ to={{pathname:"/"}} state={{ page: 1 }} className={ ({isActive}) => isActive ? activeC : inactiveC } aria-current="page" end>Home</NavLink>
                            </li>
                            <li>
                                <NavLink /* to="movies/popular" */ to={{pathname:"movies/popular"}} state={{ page: 1 }} className={ ({isActive}) => isActive ? activeC : inactiveC }>Popular</NavLink>
                            </li>
                            <li>
                                <NavLink /* to="movies/top" */ to={{pathname:"movies/top"}} state={{ page: 1 }} className={ ({isActive}) => isActive ? activeC : inactiveC }>Top Rated</NavLink>
                            </li>
                            <li>
                                <NavLink /* to="movies/upcoming" */ to={{pathname:"movies/upcoming"}} state={{ page: 1 }} className={ ({isActive}) => isActive ? activeC : inactiveC }>Upcoming</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className={`${ hidden ? "" : "hidden" } justify-between items-center w-full lg:flex lg:w-auto lg:order-1 my-5`}>
                        <form class="max-w-md mx-auto"  onSubmit={handleSubmit}>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" name="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                            </div>
                        </form>
                    </div>

                    <button className="lg:hidden text-white" onClick={ () => setHidden(!hidden) }>
                        { hidden ? "Close Search" : "Open Search"}
                    </button>
                </div>
            </nav>
        </header>
    )
};