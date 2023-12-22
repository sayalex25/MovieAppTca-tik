import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { MoviePoster } from './';

export const HorizontalSlider = ({ title, movies }) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            color: '#002851',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10,
          }}
        >
          {title}
        </Text>
      )}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {movies.map((item) => (
          <MoviePoster
            key={item.id.toString()}
            movie={item}
            width={140}
            height={200}
          />
        ))}
      </ScrollView>
    </View>
  );
};