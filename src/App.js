import React, {Component} from 'react';
import './App.css';
import {Header, MovieList, MovieDetails, Loading, SearchBar} from './components';
import apiMovie from './conf/api.movie';


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      movies: null,
      selectedMovie:0,
      loading:false
    }
    
  }
  
  updateSelectedMovie = (index) =>{
    this.setState({
      selectedMovie : index
    })
  }
  componentDidMount() {
    
    apiMovie.get("/discover/movie")
      .then(response => response.data.results)
      .then(movieApi => {
        const movies= movieApi.map(m => ({
          title: m.title,
          img:'https://image.tmdb.org/t/p/w500' + m.poster_path,
          detail: `${m.vote_average}/10 | ${m.release_date}`,
          description: m.overview
        }))
        this.updateMovie(movies);
      })
       
      .catch(err => console.log(err));
  }

  updateMovie= (movies) =>{
    this.setState({
      loading:true,
      movies:movies
    })
  } 
  render(){
    return (
    <div className="App d-flex flex-column">
      <Header />
        <SearchBar updateMovie={this.updateMovie}/>
        {this.state.loading ? (
          <div className='d-flex flex-row border flex-lg-fill pt-4 p-2'>
            <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
            <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
          </div>
        ):(
          <Loading/>
        )}
      
    </div>
  );
  }
  
}

export default App;
