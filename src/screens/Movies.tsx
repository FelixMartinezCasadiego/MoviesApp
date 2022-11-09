import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react';
import { retrivePopularMovies } from '../api';
import MoviesList from '../components/MoviesList';

const Movies = () => {

    const [apiMovies, setApiMovies] = useState([]);

    useEffect(() => {
        retrivePopularMovies()
            .then((resp) => setApiMovies(resp))
            .catch((err) => {throw new Error(err)})
            console.log(apiMovies?.results.map((resp : any) => resp.original_title))
    }, [])
    

    return (
        <View>
{/*             {
                apiMovies ?
                apiMovies.map((movie)=><MoviesList movie={movie} /> )
                : ''
            } */}
            <Text>Eey you are in home</Text>
        </View>
    )
}

export default Movies