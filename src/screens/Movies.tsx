import { FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native'
import React, {useState, useEffect} from 'react';
import { retrivePopularMovies } from '../api';
import MoviesList from '../components/MoviesList';
import { MoviesInformation, Result } from '../api/typeApi';
import CarrouselMovies from '../components/CarrouselMovies';

const Movies = () => {

    const [apiMovies, setApiMovies] = useState<MoviesInformation>();
    const [resultsMovies, setResultsMovies] = useState<Result[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(page === 1)
        {   
            retrivePopularMovies(page)
                .then((resp) => {
                            setApiMovies(resp);
                            setResultsMovies(apiMovies || resp.results ? resp.results : [])
                        })
                .catch((err) => {throw new Error(err)})
            setIsLoading(true)
        }
            else {
                retrivePopularMovies(page)
                    .then((resp) => {
                                setApiMovies(resp);
                                setResultsMovies([...resultsMovies, ...resp.results ])
                            })
                    .catch((err) => {throw new Error(err)})
                    setIsLoading(true)
            }
    }, [page])


    const loadMoreMovies = () => {
        if(apiMovies?.total_pages && page < apiMovies.total_pages){
            setPage(page + 1)
            setIsLoading(false)
        }
    }

    return (
        <>

            <FlatList 
                data={resultsMovies}
                ListHeaderComponent={<CarrouselMovies />}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => String(index)}
                renderItem={({item}) => <MoviesList movieDetail={item} /> }
                onEndReached={loadMoreMovies}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    isLoading ? 
                        <ActivityIndicator 
                            size='large' 
                            color='#fff' 
                            style={styles.spinner} 
                        />
                    : <Text>No more movies</Text>
                }
            /> 
            
        </>
    )
}

export default Movies

const styles = StyleSheet.create({
    container: {
        minHeight: 40
    },
    spinner: {
        paddingTop: 20,
        paddingBottom: 60,
        backgroundColor: '#151c26',
    }
})