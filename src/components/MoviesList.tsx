import { View, Text } from 'react-native';
import React from 'react';
import {Result} from '../api/typeApi'

interface Props {
  movieDetail: Result
}

const MoviesList = ({movieDetail} : Props) => {
  return (
    <View>
      <Text> {movieDetail.original_title} </Text>
    </View>
  )
}

export default MoviesList