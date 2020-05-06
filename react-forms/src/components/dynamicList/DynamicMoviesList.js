import React, { Component } from 'react'
import Card from '../card/Card'
import NewMovieForm from './NewMovieForm'

class DynamicMoviesList extends Component {

    constructor() {
        super()
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true },
                { title: "Star Wars", director: "Rian Johnson", hasOscars: false },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: true },
                { title: "La cuidad de los niños perdidos", director: "Ger", hasOscars: true },
                { title: "Campamento Flippy", director: "Flippy", hasOscars: false }
            ]
        }
    }

    pushNewMovie = theNewMovie => {
        const moviesCopy = [...this.state.movies]
        moviesCopy.push(theNewMovie)
        this.setState({ movies: moviesCopy })
    }


    render() {

        return (
            <>
                <h2>Añade una nueva película a React!</h2>
                <NewMovieForm addMovie={this.pushNewMovie} />
                <hr />
                <h2>Películas actuales</h2>
                {this.state.movies.map((elm, idx) => <Card key={idx} {...elm} removeCard={() => this.removeMovieFromState(idx)} />)}

            </>
        )
    }
}

export default DynamicMoviesList