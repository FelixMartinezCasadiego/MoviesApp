import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import FavoritesMovies from '../screens/FavoritesMovies';
import Movies from '../screens/Movies';
import Account from '../screens/Account';

const MainNavigation = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName='Movies'>
            <Tab.Screen 
                name='Favorites' 
                component={FavoritesMovies} 
                options={{
                    tabBarIcon:({color,size}) => (
                        <Icon name='heart' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='Movies' 
                component={Movies} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => renderImgMovies(),
                }}
            />
            <Tab.Screen 
                name='Account' 
                component={Account} 
                options={{
                    tabBarIcon:({color, size}) => (
                        <Icon name='user' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const renderImgMovies = () : any => {
    return(
        <Image 
            source={require('../assets/moviesHome.png')}
            style={{width: 75, height: 75 , top: -30}}
        />
    )
} 

export default MainNavigation