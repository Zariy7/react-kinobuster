import React from 'react';
import { useState, useEffect } from 'react';

export const Footer = () => {
    const [darkMode, setDarkMode] = useState( JSON.parse(localStorage.getItem('darkMode')) || false);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }

    }, [darkMode]);

    return(
        <footer className={`bg-blue-100 dark:bg-gray-900 ${(darkMode ? 'text-yellow-300' : 'text-blue-600')}`}>
            <div className="w-full p-4 py-6 lg:py-8 max-w-screen-xl	my-0 mx-auto flex justify-between">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="https://react.dev/" className="hover:underline">React</a>
                                </li>
                                <li>
                                    <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                                <li>
                                    <a href="https://www.themoviedb.org/" className="hover:underline">TheMovieDB</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Find me</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <button className="font-bold" onClick={() => setDarkMode(!darkMode)}>
                    { darkMode ? 'Light' : 'Dark' }
                </button>
            </div>
            <p className='w-full p-4 pb-6 max-w-screen-xl my-0 mx-auto text-black dark:text-white'>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </footer>
    )
};