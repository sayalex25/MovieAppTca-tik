import { NavigationContainer } from '@react-navigation/native';
import { extendTheme, NativeBaseProvider } from "native-base";

import Main from './navigation/Main';

const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });

//Componente principal de la aplicación
const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Main />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App