import React, { Component } from 'react';
import { MovieElements } from '..';

export default class MovieList extends Component {
    render() {
        return (
            <div className="w-75 border d-flex flex-row flex-wrap align-content-start pt-4">
              <MovieElements/>
              <MovieElements/>
              <MovieElements/>
              <MovieElements/>
              <MovieElements/>
              <MovieElements/>
              <MovieElements/>
              
            </div>
        )
    }
}