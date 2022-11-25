import React,  {useContext} from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import FavoritesMovies from '../screens/FavoritesMovies';
import Account from '../screens/Account';
import MoviesNavigation from '../screens/MoviesNavigation';
import { ContextMovies } from '../context/Context';

const MainNavigation = () => {

    const Tab = createBottomTabNavigator();

    const { showSearch } : any = useContext(ContextMovies);

    return (
        <Tab.Navigator 
            initialRouteName='Movies' 
            screenOptions={{
                headerTitleAlign: 'center', 
                tabBarActiveBackgroundColor: '#151c26',
                tabBarInactiveBackgroundColor: '#151c26',
            }} 
        >
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
                component={MoviesNavigation} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => renderImgMovies(), 
                    headerStyle: {
                        backgroundColor: '#151c26',
                      },
                    headerTintColor: '#fff',
                    headerRight: () => (
                        <Icon 
                            name='search' 
                            size={20} 
                            color={'#fff'} 
                            onPress= {showSearch}
                        />
                    ),
                    headerRightContainerStyle: { right: 20 },
                    headerLeft: () => (<Icon name='bars' size={20} color={'#fff'} />),
                    headerLeftContainerStyle: {left: 20},
                    
                    
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

const styles = StyleSheet.create({
    containerMainNavigation: {
        backgroundColor: '#151c26'
    }
})

