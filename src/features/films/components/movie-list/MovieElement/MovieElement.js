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
          <div className="flex-fill d-flex flex-column p-3">
            <h5>{this.props.movies.title}</h5>
            <hr className="w-100" />
            <p className="flex-fill">{this.props.movies.details}</p>
            <div className="d-flex flex-row justify-content-end">
              {this.props.isFavori ? (
                <button onClick={() => { this.props.removeFavori(this.props.movies.title) }}
                  className="btn btn-small btn-danger">Remove</button>
              ) : (
                  <button onClick={() => { this.props.addFavori(this.props.movies.title) }}
                    className="btn btn-small btn-primary">Add</button>
                )}
            </div>
          </div>
        </div>
      );
    }
}