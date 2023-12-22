import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SeriesScreen from '../screens/SeriesScreen';
import DescriptionSerie from '../screens/DescriptionSerie';

const Stack = createNativeStackNavigator();

// Navegación se la sección Series
const SeriesNavigation = () => {
  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={SeriesScreen} />
        <Stack.Screen name="Description" component={DescriptionSerie} />
      </Stack.Navigator>
  );
}

export default SeriesNavigation;
