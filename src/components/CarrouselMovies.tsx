import { View, Text, StyleSheet, FlatList, Image, Dimensions, Animated } from 'react-native';
import React, { useState, useEffect, useRef} from 'react';
import { retriveDiscoversNewMovies } from '../api';
import {MoviesInformation} from '../api/typeApi';
import Paginator from './Paginator';

const CarrouselMovies = () => {

    const [carrouselMovies, setCarrouselMovies] = useState<MoviesInformation>();

    useEffect(() => {
        retriveDiscoversNewMovies()
            .then((resp) => setCarrouselMovies(resp))
            .catch((err) => {throw new Error(err)})
    }, []);

    const carrouselMovieDetails = carrouselMovies?.results;

    const scrollX = useRef(new Animated.Value(0)).current;
    
    return (
        <View >
            <FlatList 
                data={carrouselMovieDetails}
                keyExtractor={(item) =>String(item.id)}
                renderItem={({item}) => 
                    <View style={styles.containerCarrousel}>
                        <Image 
                            source={{uri:`https://image.tmdb.org/t/p/original${item.poster_path}`}}
                            style={styles.imageCarrousel}
                            resizeMode='stretch'
                        />
                        <Text style={styles.textcarousel} > {item.original_title} </Text>
                    </View>
                }
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                onScroll={Animated.event([{nativeEvent: {contentOffset: { x:scrollX } } }], {useNativeDriver: false} )}
            />
            
            <Paginator carrouselMovieDetails={carrouselMovieDetails} scrollX={scrollX} />
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
        paddingVertical: 5
    },
    imageCarrousel: {
        resizeMode: 'center',
        width: widthCarousel,
        height: 250,
    },
    textcarousel: {
        color: '#fff'
    }
})