import * as axios from 'axios';

const apiMovie = axios.create({
  baseURL: 'http://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use(req => {
  req.headers['Authorization'] = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmY5MDgyNjhhOTdlODU5OWJlZWEyMDlmMGRjMjkwYyIsInN1YiI6IjVlYzRkZmViOGUyZTAwMDAyMDFjZTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2fBELJvLqtiMqOYBc8gov11Bv0-DPLcguQAqEHuqSSA";
  return req;
})
export default apiMovie;