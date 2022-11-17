import { View, Text } from 'react-native';
import React, {useEffect, useState} from 'react';
import { retriveMovieById } from '../api';
import { MovieInformationById } from '../api/typeApi';

interface PropsMovieDetails {
  route: any
}

const MovieDetails = ({route: {params}} : PropsMovieDetails) => { 

  const [movieIdDetails, setMovieIdDetails] = useState<MovieInformationById>();

  useEffect(() => {
    retriveMovieById(params.id)
      .then((resp) => setMovieIdDetails(resp))
      .catch((err) => {throw new Error(err)})
  }, [params.id])

  return (
    <View>
      <Text> {movieIdDetails?.title} </Text>
    </View>
  )
}

export default MovieDetails