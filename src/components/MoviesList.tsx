import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import {Result} from '../api/typeApi'
import { useNavigation } from '@react-navigation/native';

interface Props {
  movieDetail: Result
}

interface MovieDetails {
  navigate: any
}

const MoviesList = ({movieDetail} : Props) => {

  const navigation = useNavigation<MovieDetails>();
  const goToMovieDetails = () => {
    navigation.navigate("MovieDetails", {id: movieDetail.id})
  };

  return (
    <Pressable onPress={goToMovieDetails} style={styles.containerList} >
        <Text style={styles.textMoviesList} > {movieDetail.original_title} </Text>
        <View style={styles.imgContainer}>
        <Image 
          source={{uri:`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}} 
          style={styles.imageMovieContainer}
        /></View>
    </Pressable>
  )
}

export default MoviesList

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#151c26',
    paddingBottom: 25,
  },
  imgContainer: {
    alignItems:'center'
  } ,
  imageMovieContainer: {
    width: 400,
    height: 200,
    borderRadius: 70
  },
  textMoviesList: {
    color: '#fff',
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 16,  
  },
})