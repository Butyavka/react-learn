import React, {useEffect} from "react";
import '../styles/detail.css'
import {addDefaultSrc} from "../utils/addDefaultSrc";

const Detail = (props) => {
    let nowState = props.location.state

    useEffect(() => {
        if (nowState === undefined) {
            props.history.push('/');
        }
    })

   
    if (nowState === undefined) {
        return null
    } else {
        return ( 
        <div className="container">
            <div className="detail-page">
                <div className="detail-page__img-box">
                    <img onError={e => addDefaultSrc(e)} src={nowState.poster} alt={nowState.title} title={nowState.title} className="detail-page__img"/>
                </div>
                <div className="detail-page__info">
                    <h3 className="detail-page__title">{nowState.title}</h3>
                    <h5 className="detail-page__year">{nowState.year}</h5>
                    <ul className="detail-page__genres">
                        {nowState.genres.map( (genre, index) => {
                            return <li className="detail-page__genre" key={index}>{genre}</li>
                        })}
                    </ul>
                    <p className="detail-page__summary">{nowState.summary}</p>
                </div>
            </div>
        </div>
    )
    }
}

export default Detail