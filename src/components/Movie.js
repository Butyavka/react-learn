import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import "../styles/movie.css"
import {addDefaultSrc} from "../utils/addDefaultSrc";

const Movie = ({id, year, title, summary, poster, genres}) => {

    return (
        <Link to={{
            pathname: `/react-learn/movie/${id}`,
            state: {
                id,
            }
        }} key={id} className="movie">
            <img onError={e => addDefaultSrc(e)} src={poster} alt={title} title={title} className="movie__img"/>
            <div className="movie__column">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                {genres && genres.length &&
                    <ul className="movie__genres">
                {genres.map((genre, index) => {
                    return <li className="movie__genre" key={index}>{genre}</li>
                })}
                    </ul>}
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;