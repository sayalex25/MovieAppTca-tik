import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DescriptionMovie from '../screens/DescriptionMovie';

const Stack = createNativeStackNavigator();
// Navegación se la sección home
const HomeNavigation = () => {
  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Description" component={DescriptionMovie} />
      </Stack.Navigator>
  );
}

export default HomeNavigation;
