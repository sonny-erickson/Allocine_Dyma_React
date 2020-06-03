import React, {Component} from 'react';
import './App.css';
import {Header} from './components';
import apiMovie from './conf/api.movie';
import Films from './features/films';
import Favoris from './features/favoris';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      movies: null,
      selectedMovie:0,
      loading:false,
      favoris:[]
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
  // addFavori = (title) => {
  //   const favoris = this.state.favoris.slice();//renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine
  //   const film = this.state.movies.find( m => m.title === title );
  //   favoris.push(film);
  //   this.setState({
  //     favoris
  //   });
  // }
  //   removeFavori = (title) => {
  //   const favoris = this.state.favoris.slice();
  //   const index = this.state.favoris.findIndex( f => f.title === title );
  //   favoris.splice(index, 1);
  //   this.setState({
  //     favoris
  //   });
  // }
  addFavori = title => {
    const film = {...this.state.movies.find( m => m.title === title )};
    this.setState(state => ({
      favoris: [...this.state.favoris, film]
    }));
    }
    
    removeFavori = title => {
    const index = this.state.favoris.findIndex( f => f.title === title );
    this.setState(state => ({
      favoris: state.favoris.filter((_, i) => i !== index)
    }));
    }
  render(){
    return (
      <Router>
        <div className="App d-flex flex-column">
          <Header />
          <Switch>
            <Route path="/films" render={(props)=>
              <Films
                {... props}
                updateMovie={this.updateMovie}
                loading={this.state.loading}
                movies={this.state.movies}
                updateSelectedMovie={this.updateSelectedMovie}
                selectedMovie={this.state.selectedMovie}
                addFavori={ this.addFavori }
                removeFavori={ this.removeFavori }
                favoris={ this.state.favoris.map( f => f.title ) }
              />
            }/>
            <Route path="/favoris" render={(props) => {
              return (
                <Favoris
                  {...props}
                  favoris={this.state.favoris}
                  removeFavori={this.removeFavori}
                />
              )
            }} />
            <Redirect to="/films" />

          </Switch>
         
        </div>

      </Router>
    
  );
  }
  
}

export default App;
