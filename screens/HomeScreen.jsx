import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

import { VStack, Image, Input, NativeBaseProvider, Icon, Center, ScrollView, View } from 'native-base';
import MovieIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { HorizontalSlider, SearchInput } from '../components/';
import { useMovies, useSeries, useSearch } from '../hooks';

//Screen princinpal de la aplicación
const HomeScreen = () => {

  {/* sección de hooks y funciones */ }
  const [search, setSearch] = React.useState();
  const [query, setQuery] = useState()

  const { stateSearch } = useSearch(query);
  const { popular } = useMovies();
  const { topRated } = useSeries();

  {/* esta función maneja la petición 'buscar' luego de que el usuario lo solicita */ }
  const onSubmit = () => {
    if (!!stateSearch) {
      setQuery('');
    }
    setQuery(search);
  };

  return (
      <ScrollView style={ styles.backgroundHome }>
        <Center>

          {/* Buscador */}

          <VStack width="100%">

          <View style={styles.hearder}>
          <MovieIcon name="movie" color="#002851" size={40} />
          <Text style={styles.title}>Tca Tik App</Text>
          </View>

            <SearchInput />

            {
              stateSearch.length > 1
                ? (
                  <HorizontalSlider title="Search Result" movies={stateSearch} />
                )
                : (null)
            }

            {/* Películas más buscadas */}
            <HorizontalSlider title="Most Popular Movies" movies={popular} />

            {/* Series más vistas */}
            <HorizontalSlider title="Top Rated Series" movies={topRated} />

          </VStack>
        </Center>
      </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundHome:{
    backgroundColor: '#dbf4ff',
  },
  hearder: { 
    flexDirection:'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 60,
    marginBottom: 20 
  },
  title: { 
    fontSize: 20, 
    fontWeight: "bold",
    color: '#002851'
  }
}); 