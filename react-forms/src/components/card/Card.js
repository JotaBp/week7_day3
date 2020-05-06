import React from 'react'
import './Card.css'

const Card = ({ title, director, hasOscars }) => {
    return (
        <article className="movie-card">
            <h3>{title}</h3>
            <hr />
            <p>{director}</p>
            <p>{hasOscars ? 'Ganó un Oscar' : 'Sin oscar'}</p>
        </article>
    )
}

export default Card