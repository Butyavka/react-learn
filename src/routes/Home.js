import React, {useEffect, useState} from "react";
import axios from 'axios';
import Movie from "../components/Movie";
import {getPageCount, getPagesArray} from "../utils/pages"
import Pagination from "../components/Pagination";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const getMovies = async (limit = 10, page = 1) => {
        const response = await (await axios.get('https://yts.mx/api/v2/list_movies.json?sort__by=rating', {
            params: {
                limit,
                page
            }
        })).data.data
        setMovies(response.movies);
        const totalCount = response.movie_count
        setTotalPages(getPageCount(totalCount, limit))
        setIsLoading(false)
    }
    useEffect(() => {
        getMovies(limit, page)
    }, [page])
    return (
        <>
            <section className='container'>
                {isLoading ?
                    <div className='loader'>
          <span className='loader__text'>
            Загрузка...
          </span>
                    </div>
                    : <div className="movies">
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
                    </div>
                }
                {/*<Pagination totalPages={totalPages} page={page} setPage={setPage}/>*/}
            </section>
        </>
    );
}

export default Home;
