import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from './Movies';
import MovieDetails from '../components/MovieDetails';

const Stack = createNativeStackNavigator();

const MoviesNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='App Movies'
            component={Movies}
            options={{title: "", headerTransparent: true}}
        />
        <Stack.Screen 
            name='MovieDetails'
            component={MovieDetails}
        />
    </Stack.Navigator>
  )
}

export default MoviesNavigation