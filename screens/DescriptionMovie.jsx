
import { Image, Text, View, StyleSheet, Dimensions, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

//Screen con la ficha de la película seleccionada, los parámetros vienen por props
const DescriptionMovie = ({ route, navigation }) => {

  const movie = route.params;
  {/* completamos el url con la variable poster_path para obtener la url dela iamgen */}
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  {/* obtenemos la información y actualizamso los estados a través del custom hooks useMovieDetails */}
  const { isLoading, cast, movieFull } = useMovieDetails( movie.id );

  return (
    <ScrollView>
            {/* ficha con los datos de la película seleccionada */}
            <View style={ styles.imageContainer }>
                <View style={ styles.imageBorder }>
                    <Image 
                        source={{ uri }}
                        style={ styles.posterImage }
                    />
                </View>
            </View>

            <View style={ styles.marginContainer }>
                <Text style={ styles.subTitle }>{ movie.original_title }</Text>
                <Text style={ styles.title }>{ movie.title }</Text>
            </View>

            {/* Enviamos por parámetro movieFull y cast, para renderizar el componente MovieDetails,
                        las fichas de detalle y de los actores del reparto */}
            {
                isLoading 
                    ? <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }} />                    
                    : <MovieDetails movieFull={ movieFull } cast={ cast } />
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

export default DescriptionMovie;

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