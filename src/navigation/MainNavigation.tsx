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
        <Tab.Navigator initialRouteName='Movies' screenOptions={{headerTitleAlign: 'center'}} >
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
                    headerStyle: {
                        backgroundColor: '#151c26',
                      },
                    headerTintColor: '#fff',
                    headerRight: () => (<Icon name='search' size={20} color={'#fff'} />),
                    headerRightContainerStyle: { right: 20 } ,
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

export default MainNavigation

const renderImgMovies = () : any => {
    return(
        <Image 
            source={require('../assets/moviesHome.png')}
            style={{width: 75, height: 75 , top: -30}}
        />
    )
} 

