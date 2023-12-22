import React, { useState, useEffect } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';

import movieDB from '../api/movieDB';

export const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    searchMovies();
  }, [query]);

  const searchMovies = async () => {
    try {
      const multiSearchPromise = movieDB.get(`/search/multi?query=${query}`);
      const resps = await Promise.all([multiSearchPromise]);
      setMovies(resps[0].data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBlur = () => {
    setShowList(false);
  };

  const handleFocus = () => {
    setShowList(true);
  };

  const handleSearch = () => {
    searchMovies();
  };

  const handleClear = () => {
    setQuery('');
    setMovies([]);
  };

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleFocus}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Buscar películas"
              onChangeText={setQuery}
              value={query}
              onFocus={handleFocus}
            />
            {query !== '' && (
              <TouchableOpacity onPress={handleClear}>
                <Ionicons name="close" size={24} color="black" style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
        {showList && (
          <View style={styles.movieList}>
            {movies.map((movie) => (
              <TouchableOpacity 
                  key={movie.id} 
                  style={styles.movieContainer}
                  onPress={ () => navigation.navigate('Description', movie ) }
                  >
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.thumbnail} />
                <View style={styles.movieInfo}>
                  <Text style={styles.title}>{movie.title ? movie.title : query}</Text>
                  <Text style={styles.rating}>Valoración: {movie.vote_average}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#005db4',
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
  },
  icon: {
    padding: 5,
  },
  movieList: {
    width: '80%',
  },
  movieContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  movieInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 14,
    color: 'gray',
  },
});