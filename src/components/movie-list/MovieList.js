import React, { Component } from 'react';
import { MovieElements } from '..';

export default class MovieList extends Component {
    render() {
        return (
            <div className="w-75 border d-flex flex-row flex-wrap align-content-start pt-4">
                {this.props.movies.map((m, index)=>(
                    <MovieElements movies={m} updateSelectedMovie={this.props.updateSelectedMovie}/>
                ))}
              
            </div>
        )
    }
}