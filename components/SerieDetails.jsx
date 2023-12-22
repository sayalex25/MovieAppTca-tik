import React from 'react'
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { CastItem } from './';

//Componente que carga los detalles de las películas
export const SerieDetails = ({ movieFull, cast }) => {

    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                {/* Recibe los parámetros movieFull y cast a través de props, y rellena la ficha con los datos */}
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />

                    <Text> {movieFull.vote_average}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>

                </View>

                {/* Temporadas */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Temporadas
                </Text>

                <Text selectable style={{ fontSize: 18 }}>
                    { movieFull.number_of_seasons }
                </Text>

                {/* Capítulos */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Número de Capítulos
                </Text>

                <Text selectable style={{ fontSize: 18 }}>
                    { movieFull.number_of_episodes }
                </Text>

                {/* Web */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Página Web
                </Text>
                <Text selectable style={{ fontSize: 14 }}>
                    { movieFull.homepage }
                </Text>


            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                    Actores
                </Text>
                {/* Hace una lista renderizando el componente CastItem con las fichas de los actores del reparto */}
                <FlatList
                    data={cast}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70 }}
                />


            </View>

        </>
    )
}