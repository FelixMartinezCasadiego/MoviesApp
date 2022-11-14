import axios from "axios";

export const retrivePopularMovies = () => axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=7186072bde2dd099c79ca5f770428be1&language=en-US&page=1').then(({data}) => data); 

export const retriveDiscoversNewMovies = () => axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7186072bde2dd099c79ca5f770428be1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2022&with_watch_monetization_types=flatrate').then(({data}) => data);

export const retriveTrendingPeople = () => axios.get('https://api.themoviedb.org/3/person/popular?api_key=7186072bde2dd099c79ca5f770428be1&language=en-US&page=1').then(({data}) => data)

export const retriveMovieById = (movie_id : number) => axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=7186072bde2dd099c79ca5f770428be1&language=en-US`).then(({data}) => data)