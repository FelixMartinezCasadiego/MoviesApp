import { 
        View, 
        Text, 
        Image, 
        StyleSheet, 
        Dimensions, 
        TouchableOpacity,
        Linking,
        ScrollView 
      } from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome5';
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
  }, [params.id]);

  const getGenre = () => {
    return movieIdDetails?.genres.map(genre => (
      <View style={styles.genreContainer}>
        <Text style={styles.genre}>{genre.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Image 
            source={{uri:`https://image.tmdb.org/t/p/original${movieIdDetails?.backdrop_path}`}}
            style={styles.imageBg}
          />
        </View>
        <Text style={styles.detailsMovieTitle}> {movieIdDetails?.title} </Text>
        { movieIdDetails?.homepage ?
          <View style={styles.linkContainer}>
            <TouchableOpacity onPress={() => {Linking.openURL(movieIdDetails.homepage)}}>
              <Icon name='link' color='#fff' size={22} />
            </TouchableOpacity>
          </View>
          : null
        }
        
        <Text style={styles.heading}>OVERVIEW</Text>
        <Text style={styles.overview}> {movieIdDetails?.overview} </Text>
        
        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.heading}>BUDGET</Text>
            <Text style={styles.details}> {movieIdDetails?.budget} </Text>
          </View>

          <View>
            <Text style={styles.heading}>DURATION</Text>
            <Text style={styles.details}> {movieIdDetails?.runtime} min. </Text>
          </View>

          <View>
            <Text style={styles.heading}>RELEASE DATE</Text>
            <Text style={styles.details}> {movieIdDetails?.release_date} </Text>
          </View>
        </View>

        <Text style={styles.heading}>GENRE</Text>
            <View style={{display: 'flex', flexDirection: 'row', paddingBottom: 60}} key={movieIdDetails?.id}>
              {getGenre()}
            </View>
        

      </View>
    </ScrollView>
  )
}

export default MovieDetails;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#151c26',
    height: deviceHeight,
  },
  imageBg: {
    width: deviceWidth,
    height: 250,
  },
  detailsMovieTitle: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    marginTop: -38,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  linkContainer: {
    backgroundColor: '#F4C10F',
    borderRadius: 100,
    padding: 10,
    width: 45,
    marginLeft: 20,
    marginTop: -20,
  },
  heading: {
    fontSize: 19,
    color: '#969696',
    margin: 10,
  },
  overview: {
    color: '#fff',
    marginHorizontal: 10,
    textAlign: 'justify',
    fontSize: 16,
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  details: {
    color: '#F4C10F',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  genreContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  genre: {
    color: '#fff',
    fontSize: 16,
  },
})