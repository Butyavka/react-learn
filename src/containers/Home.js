import React, {useEffect, useRef, useState, useMemo} from "react";
import Movie from "../components/Movie";
import {getMovies} from "../api/getMovies";
import {getPageCount, getPagesArray} from "../utils/pages"
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import Select from "../components/UI/select/Select";
import Input from "../components/UI/input/Input";
import '../styles/search.css'
import '../styles/not-found.css'
import '../styles/sort-movies.css'
import panda from '../assets/images/panda.jpg'
import Button from "../components/UI/button/Button";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [selectedSort, setSelectedSort] = useState('')
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(15);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('')
    const lastElement = useRef()

    const sortedMovies = useMemo(() => {
        if (selectedSort) {
            return (
                selectedSort === 'title'
                    ?
                    [...movies].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
                    :
                    [...movies].sort((a, b) => a[selectedSort] - b[selectedSort])
            )
        } else {
            return movies
        }
    }, [selectedSort, movies])

    const sortedAndSearchMovies = useMemo(() => {
        return sortedMovies.filter(movie => movie.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedMovies])

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

    const sortMovies = sort => setSelectedSort(sort)

    // useObserver(lastElement, page < totalPages, isLoading, () => {
    //     setPage(page + 1)
    // })
    return (
        <>
            <section className='container'>
                <div className='search'>
                    <div className='sort__box'>
                        <Select
                            defaultValue='Сортировка по'
                            options={[
                                {value:'title', name: 'По названию'},
                                {value:'year', name: 'По году выхода'}
                            ]}
                            value={selectedSort}
                            onChange={sortMovies}
                            selectClass='sort__select'
                        />
                    </div>
                    <div className='search__box'>
                        <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} inputPlaceholder='Поиск' inputClass='search__input'/>
                        <Button onClick={e => setSearchQuery('')} buttonClass='search__button' text='Очистить'/>
                    </div>
                </div>
                {isLoading &&
                <div className='loader'>
                    <Loading/>
                </div>
                }
                {sortedAndSearchMovies.length || isLoading
                    ?
                    <div className="movies">
                        {sortedAndSearchMovies.map(movie => {
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
