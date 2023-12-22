import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPanel from '../screens/LoginPanel';
import UserPanel from '../screens/UserPanel';
import RegisterPanel from '../screens/Registro';

const Stack = createNativeStackNavigator();

// Navegación se la sección Movie
const MoviesNavigation = () => {
  return (
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPanel} />
        <Stack.Screen name="Register" component={RegisterPanel} />
        <Stack.Screen name="UserPanel" component={UserPanel} />
      </Stack.Navigator>
  );
}

export default MoviesNavigation;
