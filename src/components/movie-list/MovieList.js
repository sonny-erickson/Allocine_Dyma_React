import React, { Component } from 'react';
import  MovieElements  from './MovieElement/MovieElement';

export default class MovieList extends Component {
    render() {
        return (
            <div className="w-75 border d-flex flex-row flex-wrap justify-content-center pt-4">
                {this.props.movies.map((m, index)=>(
                    <MovieElements movies={m} key={m.title + index} updateSelectedMovie={()=>{this.props.updateSelectedMovie(index)}}/>
                ))}
              
            </div>
        )
    }
}