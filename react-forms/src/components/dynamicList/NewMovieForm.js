import React, { Component } from 'react'

class NewMovieForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            director: '',
            hasOscars: false
        }
    }

    handleChange = e => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        this.setState({
            [e.target.name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        // Validación

        this.props.addMovie(this.state)
        this.setState({
            title: '',
            director: '',
            hasOscars: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Título:
                    <input name="title" value={this.state.title} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    Director:
                    <input name="director" value={this.state.director} onChange={this.handleChange} type="text" />
                </label>
                <br />
                <label>
                    ¿Tiene Oscar/s?:
                    <input name="hasOscars" checked={this.state.hasOscars} onChange={this.handleChange} type="checkbox" />
                </label>
                <br />
                <input type="submit" value="Crear nueva película" />
            </form>
        )
    }
}

export default NewMovieForm