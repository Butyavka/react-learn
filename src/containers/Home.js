import React, {useEffect, useRef, useState} from "react";
import Movie from "../components/Movie";
import {getMovies} from "../api/getMovies";
import {getPageCount, getPagesArray} from "../utils/pages"
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import {useObserver} from "../hooks/useObserver";
import Select from "../components/UI/select/Select";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(40);
    const [page, setPage] = useState(1);
    const lastElement = useRef()



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
    //
    // useObserver(lastElement, page < totalPages, isLoading, () => {
    //     setPage(page + 1)
    // })
    return (
        <>
            <section className='container'>
                {isLoading &&
                <div className='loader'>
                    <Loading/>
                </div>
                }
                <div className="movies">
                    {movies.map(movie => {
                        return (
                            <Movie key={movie.id}
                                   id={movie.id}
                                   year={movie.year}
                                   title={movie.title}
                                   summary={movie.summary}
                                   poster={movie.medium_cover_image}
                                   genres={movie.genres}
                            />
                        )
                    })}
                    <div ref={lastElement} className='hidden'></div>
                </div>
                <Pagination totalPages={totalPages} page={page} setPage={setPage}/>
            </section>
        </>
    );
}

export default Home;
