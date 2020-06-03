import React from 'react';
import { MovieDetails, MovieList, SearchBar} from './components';
import Loading from './../../components/utilis/Loading'

export default (props) => {
    return(
        <>
        <SearchBar updateMovie={props.updateMovie}/>
        {props.loading ? (
        <div className='d-flex flex-row border flex-lg-fill pt-4 p-2'>
            <MovieList
                movies={props.movies} 
                updateSelectedMovie={props.updateSelectedMovie}
                favoris={ props.favoris }
                removeFavori={ props.removeFavori }
                addFavori={ props.addFavori }/>
            <MovieDetails movie={props.movies[props.selectedMovie]}/>
        </div>
        ):(
        <Loading/>
        )}
    </>
    )
    
}