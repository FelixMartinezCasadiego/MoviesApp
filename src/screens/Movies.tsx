import { FlatList, ActivityIndicator, StyleSheet, TextInput, View } from 'react-native'
import React, {useState, useEffect, useContext} from 'react';
import { retrivePopularMovies, retriveSearchMovies } from '../api';
import MoviesList from '../components/MoviesList';
import { MoviesInformation, Result } from '../api/typeApi';
import CarrouselMovies from '../components/CarrouselMovies';
import { ContextMovies } from '../context/Context';

const Movies = () => {

    const [apiMovies, setApiMovies] = useState<MoviesInformation>();
    const [resultsMovies, setResultsMovies] = useState<Result[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const {searchMoviesByUser} : any = useContext(ContextMovies)

    useEffect(() => {
        if(page === 1 && searchMoviesByUser === '' || page === 1 && searchMoviesByUser === undefined )
        {   
            retrivePopularMovies(page)
                .then((resp) => {
                            setApiMovies(resp);
                            setResultsMovies(apiMovies || resp.results ? resp.results : [])
                        })
                .catch((err) => {throw new Error(err)})
            setIsLoading(true)
        }
        else if (page !== 1 && searchMoviesByUser === '') {
            retrivePopularMovies(page)
                    .then((resp) => {
                                setApiMovies(resp);
                                setResultsMovies([...resultsMovies, ...resp.results ])
                            })
                    .catch((err) => {throw new Error(err)})
                    setIsLoading(true)
        } else if (page === 1 && searchMoviesByUser !== '') {
            retriveSearchMovies(page, searchMoviesByUser)
                .then((resp) => {
                                setApiMovies(resp);
                                setResultsMovies(apiMovies || resp.results ? resp.results : [])
                            })
                .catch((err) => {throw new Error(err)})
            setIsLoading(true)
        } else if (page !== 1 && searchMoviesByUser !== '' ) {
            retriveSearchMovies(page, searchMoviesByUser)
                .then((resp) => { 
                                setApiMovies(resp);
                                setResultsMovies([...resultsMovies, ...resp.results ])
                            })
                .catch((err) => {throw new Error(err)})
            setIsLoading(true)
        }
        
    }, [page, searchMoviesByUser])

    const {setSearchMoviesByUser} : any = useContext(ContextMovies)

    const loadMoreMovies = () => {
        if(apiMovies?.total_pages && page < apiMovies.total_pages){
            setPage(page + 1)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    }

    return (
        <>

            <FlatList 
                data={resultsMovies}
                ListHeaderComponent={
                    <View>
                        <TextInput 
                    style={styles.inputSearch}
                    onChangeText={setSearchMoviesByUser}
                    value={searchMoviesByUser}
                    placeholder='Search Movies'
                    /> 
                        <CarrouselMovies />
                    </View>
                }
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
                    : null
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
    },
    inputSearch: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
})