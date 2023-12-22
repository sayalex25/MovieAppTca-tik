import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterPanel = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePhoneChange = (text) => {
        // Elimina cualquier carácter que no sea un número
        const formattedText = text.replace(/[^0-9]/g, '');
        setPhone(formattedText);
    };

    const handleLogin = () => {
        // Lógica para iniciar sesión
        // Puedes verificar los datos con una API o localmente
        console.log('Usuario inició sesión:', email, password);
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro</Text>
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Nombre"
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Teléfono"
                        style={styles.input}
                        keyboardType="Teléfono"
                        value={phone}
                        onChangeText={handlePhoneChange}
                    />
                </View>
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
                    <Button title="Registrarse" onPress={handleLogin} color="#002851" />
                </View>
                <View style={styles.textContainer}>
                     <Text style={styles.secondaryText}>¿Ya tienes cuenta?</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Iniciar sesión" onPress={handleLogin} color="#002851" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dbf4ff',
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

export default RegisterPanel;