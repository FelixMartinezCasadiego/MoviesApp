import { FlatList } from 'react-native'
import React, {useState, useEffect} from 'react';
import { retrivePopularMovies } from '../api';
import MoviesList from '../components/MoviesList';
import { MoviesInformation } from '../api/typeApi';
import CarrouselMovies from '../components/CarrouselMovies';

const Movies = () => {

    const [apiMovies, setApiMovies] = useState<MoviesInformation>();

    useEffect(() => {
        retrivePopularMovies()
            .then((resp) => setApiMovies(resp))
            .catch((err) => {throw new Error(err)})
    }, [])

    const movieDetail = apiMovies?.results;

    return (
        <>
            <FlatList 
                data={movieDetail}
                ListHeaderComponent={<CarrouselMovies />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <MoviesList movieDetail={item} /> }
            />
        </>
    )
}

export default Movies