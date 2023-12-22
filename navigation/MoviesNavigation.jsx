import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from '../screens/MoviesScreen';
import DescriptionMovie from '../screens/DescriptionMovie';

const Stack = createNativeStackNavigator();

// Navegación se la sección Movie
const MoviesNavigation = () => {
  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={MoviesScreen} />
        <Stack.Screen name="Description" component={DescriptionMovie} />
      </Stack.Navigator>
  );
}

export default MoviesNavigation;
