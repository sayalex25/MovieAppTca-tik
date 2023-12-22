
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useSeries } from '../hooks/useSeries';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { SeriePoster } from '../components/SeriePoster';

const { width: windowWidth } = Dimensions.get('window');

//Screen de la sección de películas
const SeriesScreen = () => {

    {/* Traemos la información de todas las películas a través del customhook useSeries */}
  const { airingToday, onTheAir, popular, topRated} = useSeries();

  return (
    <ScrollView style={{ backgroundColor: '#dbf4ff'}}>
      <View style={styles.container}>
        <Text style={styles.title}>Series</Text>
      </View>
     
     {/* Carrusel Principal con la data airingToday */}
    <View>
      <View style={{ marginTop: 20, height: 440 }}>
                        <Carousel 
                            data={ airingToday }
                            renderItem={ ({ item }) => <SeriePoster serie={ item } /> }
                            sliderWidth={ windowWidth }
                            itemWidth={ 300 }
                            inactiveSlideOpacity={0.9}                            
                        />
                    </View>

      {/* Series mejor valoradas */}
      <HorizontalSlider title="Top Rated" movies={ topRated } />

            {/* Series en el aire */}
      <HorizontalSlider title="On The Air" movies={ onTheAir } />

            {/* Series más populares */}
      <HorizontalSlider title="Popular" movies={ popular } />

    </View>
    </ScrollView>
  )
}

export default SeriesScreen

const styles = StyleSheet.create({
  title: {
    color: '#002851'
  },
});