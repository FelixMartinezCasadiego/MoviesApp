import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import {Result} from '../api/typeApi'

interface Props {
  movieDetail: Result
}

const MoviesList = ({movieDetail} : Props) => {
  return (
    <View style={styles.containerList} >
      <Image 
        source={{uri:`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}} 
        style={styles.imageMovieContainer}
      />
      <Text style={styles.textMoviesList} > {movieDetail.original_title} </Text>
    </View>
  )
}

export default MoviesList

const styles = StyleSheet.create({
  containerList: {
    backgroundColor: '#151c26'
  },
  imageMovieContainer: {
    width: 400,
    height: 200,
    resizeMode: 'contain'  
  },
  textMoviesList: {
    color: '#fff'
  }
})