import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserPanel = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.title}>Nombre Ficticio</Text>
      <Text style={styles.subtitle}>email@example.com</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar Usuario</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dbf4ff'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#002851'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#002851'
  },
  button: {
    backgroundColor: '#002851',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default UserPanel;