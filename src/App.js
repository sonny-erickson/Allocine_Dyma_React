import React, {Component} from 'react';
import './App.css';
import {Header} from './components';
import apiMovie from './conf/api.movie';
import Films from './features/films';


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
      <Films
      updateMovie={this.state.updateMovie}
      loading={this.state.loading}
      movies={this.state.movies}
      updateSelectedMovie={this.state.updateSelectedMovie}
      selectedMovie={this.state.selectedMovie}
      
      
      />
      
    </div>
  );
  }
  
}

export default App;
