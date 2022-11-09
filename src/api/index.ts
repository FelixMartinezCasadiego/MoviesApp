import axios from "axios";

export const retrivePopularMovies = () => axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7186072bde2dd099c79ca5f770428be1&language=en-US&page=1').then(({data}) => data); 