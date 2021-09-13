import React, {useEffect, useState} from "react";
import axios from 'axios';
import Movie from "../components/Movie";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
      setMovies( await (await axios.get('https://yts.mx/api/v2/list_movies.json?sort__by=rating')).data.data.movies);
      setIsLoading(false)
  }

  useEffect(() => {
    getMovies()
  }, [])
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
              <Movie id={movie.id}
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
      </section>
    </>
  );
}

export default Home;
