import React, {useEffect, useRef, useState, useMemo} from "react";
import Movie from "../components/Movie";
import {getMovies} from "../api/getMovies";
import {getPageCount, getPagesArray} from "../utils/pages"
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import '../styles/not-found.css'
import panda from '../assets/images/panda.jpg'
import MoviesFilter from "../components/MoviesFilter";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(16);
    const [page, setPage] = useState(1);
    const [filter, setFilter] =useState({sort: '', query: ''})
    // const lastElement = useRef()

    const sortedMovies = useMemo(() => {
        if (filter.sort) {
            return (
                filter.sort === 'title'
                    ?
                    [...movies].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
                    :
                    [...movies].sort((a, b) => a[filter.sort] - b[filter.sort])
            )
        } else {
            return movies
        }
    }, [filter.sort, movies])

    const sortedAndSearchMovies = useMemo(() => {
        return sortedMovies.filter(movie => movie.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedMovies])

    useEffect(() => {
        setIsLoading(true)
        getMovies(limit, page).then(res => {
            let response = res.data.data;
            setMovies(response.movies);
            const totalCount = response.movie_count
            setTotalPages(getPageCount(totalCount, limit))
            setIsLoading(false)
        });
    }, [page])

    return (
        <>
            <section className='container'>
                <MoviesFilter filter={filter} setFilter={setFilter}/>
                {isLoading &&
                <div className='loader'>
                    <Loading/>
                </div>
                }
                {sortedAndSearchMovies.length || isLoading
                    ?
                    <div className="movies">
                        {sortedAndSearchMovies.map(movie => (
                            <Movie key={movie.id}
                                   id={movie.id}
                                   year={movie.year}
                                   title={movie.title}
                                   summary={movie.summary}
                                   poster={movie.medium_cover_image}
                                   genres={movie.genres ? movie.genres : []}
                            />
                        ))}
                        {/*<div ref={lastElement} className='hidden'></div>*/}
                    </div>
                    :
                    <div className='not-found'>
                        <div className='not-found__text'>По этому запросу здесь ничего нет, зато есть панда:</div>
                        <img src={panda} alt="panda" className='not-found__img'/>
                    </div>
                }
                {sortedAndSearchMovies.length === limit ? <Pagination totalPages={totalPages} page={page} setPage={setPage}/> : '' }
            </section>
        </>
    );
}

export default Home;
