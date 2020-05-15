import React, {Component} from 'react';
import './App.css';
import {Header, MovieList, MovieDetails} from './components';


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      movies:[
        {
          title: 'Gladiator',
          img:'https://xl.movieposterdb.com/11_04/2000/172495/xl_172495_1b7c87d0.jpg',
          detail: 'Action, adventure | PG 22',
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },{
          title: 'Pokemon',
          img:'https://media.senscritique.com/media/000018648166/source_big/Pokemon_le_film_Le_pouvoir_est_en_nous.jpg',
          detail: 'Action, adventure | PG 22',
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
      ],
      selectedMovie:0
    }
  }
  updateSelectedMovie = (title) =>{
    const index = this.state.movies.findIndex((m) =>{
      return title === m.title
    })
    this.setState({
      selectedMovie : index
    })
  }
  render(){
    return (
    <div className="App d-flex flex-column">
      <Header />
      <div className='d-flex flex-row border flex-lg-fill pt-4 p-2'>
        <MovieList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie}/>
        <MovieDetails movie={this.state.movies[this.state.selectedMovie]}/>
      </div>
      
    </div>
  );
  }
  
}

export default App;
