import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginPanel = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = () => {
    // Lógica para registrar al usuario
    // Puedes utilizar una API o guardar los datos localmente
    console.log('Usuario registrado:', email, password);
    navigation.navigate('Register');
  };

  const handleLogin = () => {
    // Lógica para iniciar sesión
    // Puedes verificar los datos con una API o localmente
    console.log('Usuario inició sesión:', email, password);
    navigation.navigate('UserPanel');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Iniciar sesión" onPress={handleLogin} color="#002851" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.secondaryText}>¿Aún no tienes cuenta?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Registrarse" onPress={handleRegistro} color="#002851" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbf4ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  secondaryText: {
    fontSize: 16,
  },
});

export default LoginPanel;