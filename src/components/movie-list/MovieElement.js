import React, { Component } from 'react'

export default class MovieElement extends Component {
    onMouseEnter =()=>{
        this.props.updateSelectedMovie(this.props.movies.title);
    }
    render() {
        return (
            <div className="w-50 p-2">
                <div className="d-flex border" onMouseEnter={this.onMouseEnter}>
                    <img width="150" height="200" alt="movie" src={this.props.movies.img} />
                    <div className="d-flex flex-column flex-fill p-3">
                        <h5  >{this.props.movies.title}</h5>
                        <hr className="w-100"/>
                        <p className="text-justify">{this.props.movies.detail}</p>
                        <p className="text-justify">{this.props.movies.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}