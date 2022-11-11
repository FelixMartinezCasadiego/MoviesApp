import { FlatList, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react';
import { retrivePopularMovies } from '../api';
import MoviesList from '../components/MoviesList';
import { MoviesInformation } from '../api/typeApi';

const Movies = () => {

    const [apiMovies, setApiMovies] = useState<MoviesInformation>();

    useEffect(() => {
        retrivePopularMovies()
            .then((resp) => setApiMovies(resp))
            .catch((err) => {throw new Error(err)})
    }, [])

    const movieDetail = apiMovies?.results;

    return (
        <FlatList 
            data={movieDetail}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <MoviesList movieDetail={item} /> }
            contentContainerStyle={styles.flatListContentContainer}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
    }, 
})

export default Movies