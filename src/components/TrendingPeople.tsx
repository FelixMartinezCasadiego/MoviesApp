import { View, Text, ActivityIndicator, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { retriveTrendingPeople } from '../api/';
import { TrendingPeopleInformation } from '../api/typeApi';

const TrendingPeople = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [trendingPeople, setTrendingPeople] = useState<TrendingPeopleInformation>();

    useEffect(() => {
        retriveTrendingPeople()
            .then((resp) => setTrendingPeople(resp))
            .catch((err) => {throw new Error(err)});
        setIsLoading(false);
    }, []);

    const TrendingPeopleResults = trendingPeople?.results

    return (
        <View>
            {
                isLoading ? 
                    <ActivityIndicator size='large' color='#fff' />  
                : 
                <View style={styles.bgTrendingPeople} >
                    <FlatList 
                        data={TrendingPeopleResults}
                        renderItem={({item}) =>
                            <View style={styles.trendingPeopleContainer} >
                                <Image
                                    source={{uri: `https://image.tmdb.org/t/p/original${item.profile_path}`}}
                                    style={styles.trendingPeopleImage}
                                    />
                                <Text style={styles.trendingPeopleName}>{item.name}</Text>
                            </View>
                        }
                        horizontal
                    />
                </View>
            }
        </View>
    )
}

export default TrendingPeople

const styles = StyleSheet.create({
    bgTrendingPeople: {
        backgroundColor: '#151c26'
    },
    trendingPeopleContainer: {
        margin: 10,
      },
    trendingPeopleImage: {
        height: 70,
        width: 70,
        borderRadius: 500,
    },
    trendingPeopleName: {
        width: 60,
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },
})