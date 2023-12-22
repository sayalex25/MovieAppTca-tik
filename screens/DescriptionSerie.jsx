
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useSerieDetails } from '../hooks/useSerieDetails';
import { SerieDetails } from '../components/SerieDetails';

const screenHeight = Dimensions.get('screen').height;

//Screen con la ficha de la serie seleccionada, los parámetros vienen por props
const DescriptionSerie = ({ route, navigation }) => {

  const movie = route.params;
  {/* completamos el url con la variable poster_path para obtener la url dela iamgen */}
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  {/* obtenemos la información y actualizamso los estados a través del custom hooks useSerieDetails */}
  const { isLoading, cast, movieFull } = useSerieDetails( movie.id );

  return (
    <ScrollView>
        {/* ficha con los datos de la serie seleccionada */}
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder }>
                    <Image 
                        source={{ uri }}
                        style={ styles.posterImage }
                    />
                </View>
            </View>

            <View style={ styles.marginContainer }>
                <Text style={ styles.subTitle }>{ movie.name }</Text>
                <Text style={ styles.title }>{ movie.original_name }</Text>
            </View>

            {/* Enviamos por parámetro movieFull y cast, para renderizar el componente SerieDetails,
                        las fichas de detalle y de los actores del reparto */}
            {
                isLoading 
                    ? <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }} />
                    : <SerieDetails movieFull={ movieFull } cast={ cast } />
            }

            {/* Boton para volver */}
            <View style={ styles.backButton }>
                <TouchableOpacity
                    onPress={() => navigation.pop() }
                >
                    <Icon 
                        color="white"
                        name="arrow-back-outline"
                        size={ 30 }
                    />
                </TouchableOpacity>
            </View>
                
            
        </ScrollView>
  )
}

export default DescriptionSerie;

const styles = StyleSheet.create({
  imageContainer: {
      // backgroundColor: 'red',
      // overflow: 'hidden',
      width: '100%',
      height: screenHeight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  },

  imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  },
  posterImage: {
      flex: 1,
  },

  marginContainer: {
      marginHorizontal: 20,
      marginTop: 20
  },
  subTitle: {
      fontSize: 16,
      opacity: 0.8
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 30,
      left: 5
  }
});