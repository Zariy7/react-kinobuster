import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import { MovieDetail } from "../pages/MovieDetail";
import { MovieList } from "../pages/MovieList";
import { SearchQuery } from "../pages/SearchQuery";
import { Home } from "../pages/Home";
import { DiscoverGenres } from "../pages/DiscoverGenres";
import React from 'react';

export const AllRoutes = (props) => {
    return(
        <main>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>} />
                <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top"/>} />
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>} />
                <Route path="search/:query" element={<SearchQuery apiPath="search/movie" />} />
                <Route path="movie/:id" element={<MovieDetail />} />
                <Route path="discover-genres/:id" element={<DiscoverGenres />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </main>
    )
};
