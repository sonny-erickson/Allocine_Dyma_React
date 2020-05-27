import React, { Component } from 'react';
import Style from './MovieElement.module.scss'; // le npm install node.scss

export default class MovieElement extends Component {
    onMouseEnter =()=>{
        this.props.updateSelectedMovie(this.props.movies.index);
    }
    render() {
        return (
                <div className={"d-flex bg-light " + Style.container } onClick={this.onMouseEnter}>
                    <img width="200"  alt="movie" src={this.props.movies.img} />
                    <div className="d-flex flex-column flex-fill p-3">
                        <h5  >{this.props.movies.title}</h5>
                        <hr className="w-100"/>
                        <p className="text-justify">{this.props.movies.detail}</p>
                        
                    </div>
                </div>
            
        )
    }
}