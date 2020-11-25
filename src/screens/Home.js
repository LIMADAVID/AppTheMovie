import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { Title }from 'react-native-paper'
import CarouselVertical from '../components/CarouselVertical'
import { getNewsMoviesApi } from '../api/movies'

export default function Home(props) {
    const [navigation] = props
    const [newMovies, setNewMovies] = useState(null)

    useEffect(() => {
        getNewsMoviesApi().then((response) => {
            setNewMovies(response.results)
        })
    },[])

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            {newMovies && (
                <View style={styles.news}>
                    <Text style={styles.newsTitle}>Novos Filmes</Text>
                    <CarouselVertical data={newMovies} navigation={navigation} />
                </View>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    news: {
        marginVertical: 10
    },
    newsTitle: {
        marginBottom: 15,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 22
    }
})