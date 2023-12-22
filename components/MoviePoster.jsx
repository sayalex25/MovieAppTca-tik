import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';

// Poster o tarjeta con los datos de cada película
export const MoviePoster = ({ movie, height = 420, width = 300 }) => {

    // movie.poster_path es enviado a través de props, completamos el url para asi tener el url de la imagen
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const navigation = useNavigation();
    
    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('Description', movie ) }
            activeOpacity={0.8}
            style={ {
                width,
                height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
        >
            {/* asignamos el url a source para renderizar la imagen */}
            <View style={ styles.imageContainer }>
                <Image 
                    source={{ uri }}
                    style={ styles.image }
                />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});