import React, { Component } from 'react';
import { Formik } from 'formik';
import  apiMovie from '../../../../conf/api.movie'

export default class SearchBar extends Component {

  submit = (values, actions) => {
    const query = '?' + Object.keys(values)
                          .map( key => key + '=' + values[key] + '&')
                          .join('');
    apiMovie.get('/search/movie/' + query)
    .then(response => response.data.results)
    .then(movieApi => {
    const movies= movieApi.map(m => ({
        title: m.title,
        img:'https://image.tmdb.org/t/p/w500' + m.poster_path,
        detail: `${m.vote_average}/10 | ${m.release_date}`,
        description: m.overview
    }))
    this.props.updateMovie(movies);
    actions.setSubmitting(false);
    })
    
    .catch(err => console.log(err));
    }


  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{ query: '', language:'en-US'}}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
            <input name="query" className="flex-fill form-control mr-2"
              placeholder="Search ..." onChange={handleChange} onBlur={handleBlur} />
            <select name ="language" className="mx-2" onChange={handleChange} onBlur={handleBlur}>
                <option value='en-US'>English</option>
                <option value='fr-FR'>French</option>
            </select>
            <button className="btn btn-small btn-danger" type="submit"
              disabled={isSubmitting} >Submit</button>
          </form>
        )}
      </Formik>
    )
  }
}