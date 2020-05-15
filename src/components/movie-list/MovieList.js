import React, { Component } from 'react';
import { MovieElements } from '..';

export default class MovieList extends Component {
    render() {
        return (
            <div className="w-75 border d-flex flex-row flex-wrap align-content-start pt-4">
              <MovieElements movies={this.props.movies[0]} updateSelectedMovie={this.props.updateSelectedMovie}/>
              <MovieElements movies={this.props.movies[1]} updateSelectedMovie={this.props.updateSelectedMovie}/>
            
              
            </div>
        )
    }
}