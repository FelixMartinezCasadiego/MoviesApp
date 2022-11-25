import { View, Text, StyleSheet, FlatList, Image, Dimensions, Animated, TextInput } from 'react-native';
import React, { useState, useEffect, useRef, useContext} from 'react';
import { retriveDiscoversNewMovies } from '../api';
import {MoviesInformation} from '../api/typeApi';
import Paginator from './Paginator';
import TrendingPeople from './TrendingPeople';
import {ContextMovies} from '../context/Context';

const CarrouselMovies = () => {

    const [carrouselMovies, setCarrouselMovies] = useState<MoviesInformation>();

    const {searchToggle, searchMoviesByUser, setSearchMoviesByUser } : any = useContext(ContextMovies);

    useEffect(() => {
        retriveDiscoversNewMovies()
            .then((resp) => setCarrouselMovies(resp))
            .catch((err) => {throw new Error(err)})
    }, []);

    const carrouselMovieDetails = carrouselMovies?.results;

    const scrollX = useRef(new Animated.Value(0)).current;
    
    return (
        <View style={styles.backgroundContainer}>
            { 
                searchToggle === true ? 
                    <TextInput 
                        style={styles.inputSearch}
                        onChangeText={setSearchMoviesByUser}
                        value={searchMoviesByUser}
                        placeholder='Search Movies'
                    /> 
                : ''
            }
            <FlatList 
                data={carrouselMovieDetails}
                keyExtractor={(item) =>String(item.id)}
                renderItem={({item}) => 
                    <View style={styles.containerCarrousel}>
                        <Image 
                            source={{uri:`https://image.tmdb.org/t/p/original${item.backdrop_path}`}}
                            style={styles.imageCarrousel}
                            resizeMode='stretch'
                        />
                        <Text style={styles.textcarousel} > {item.original_title}</Text>
                    </View>
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event([{nativeEvent: {contentOffset: { x:scrollX } } }], {useNativeDriver: false} )}
            />
            
            <Paginator carrouselMovieDetails={carrouselMovieDetails} scrollX={scrollX} />
            <Text style={styles.textCarouselTrendingPeople}>Trending People</Text>
            <TrendingPeople />
            <Text style={styles.textCarouselPopularMovies}> Popular Movies </Text>
        </View>
    )
}

export default CarrouselMovies;

let widthCarousel = Dimensions.get('window').width;

const styles = StyleSheet.create({
    containerCarrousel: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151c26',
        paddingBottom: 5,
    },
    imageCarrousel: {
        resizeMode: 'center',
        width: widthCarousel,
        height: 250,
    },
    textcarousel: {
        color: '#fff'
    },
    textCarouselTrendingPeople: {
        color: '#fff',
        paddingLeft: 7
    },
    textCarouselPopularMovies: {
        color: '#fff',
        backgroundColor: '#151c26',
        paddingLeft: 7,
        paddingBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    inputSearch: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    backgroundContainer: {
        backgroundColor: '#151c26',
    }
})