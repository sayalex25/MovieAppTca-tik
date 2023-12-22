
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeNavigation from './HomeNavigation';
import MoviesNavigation from './MoviesNavigation';
import SeriesNavigation from './SeriesNavigation';
import UserNavigation from './UserNavigation'

const Tab = createBottomTabNavigator();

//Navegación general de la app, aqui se distribuyen las opciones ubicadas las tabs inferiores de la pantalla
const Main = () => {
    return (
        //creamos la barra de navegacion
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: true,
                activeTintColor: "#002851",
            }}
        >
            {/*Menu de inico */}
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="home"
                            color={color}
                            size={30}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Movies"
                component={MoviesNavigation}
                options={{
                    tabBarLabel: 'Movies',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="movie" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Series"
                component={SeriesNavigation}
                options={{
                    tabBarLabel: 'Series',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="television" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserNavigation}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account-circle" color={color} size={size} />
                    ),
                    tabBarBadge: 1, // Agrega el badge rojo con el número indicado
                    tabBarBadgeStyle: { backgroundColor: 'red' }, // Establece el color de fondo del badge
                }}
            />
        </Tab.Navigator>


    );
}

export default Main