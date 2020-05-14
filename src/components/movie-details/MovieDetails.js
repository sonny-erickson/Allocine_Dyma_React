import React, { Component } from 'react'

export default class MovieDetails extends Component {
    render() {
        return (
            <div className="w-25 border d-flex flex-column">
                <h3>{this.props.movies.title}</h3>
                <img className="d-block mx-auto" width="250" alt="movie" src={this.props.movies.img}/>
                <p className="text-secondary pt-3">{this.props.movies.detail}</p>
                <p className="text-justify px-4">{this.props.movies.description}</p>
            </div>
        )
    }
}