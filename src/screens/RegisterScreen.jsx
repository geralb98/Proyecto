import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/FireBase';
import { styles } from '../styles/StylesRegister';

export async function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    // const handlerRegister = () => {
    //     try {
    //         createUserWithEmailAndPassword(auth, email, password)
    //             .then((userCredential) => {
    //                 // Signed up 
    //                 const user = userCredential.user;
    //                 // ...
    //             })
    //             .catch((error) => {
    //                 const errorCode = error.code;
    //                 const errorMessage = error.message;
    //                 console.log('error in register user: ', error);
    //                 // ..
    //             });

    //         navigation.navigate("login");
    //     } catch (error) {
    //         Alert.alert('Error de Registro', error.message);
    //     }
    // }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Email' value={email} onChangeText={setEmail} style={styles.input} />
            <TextInput placeholder='Contraseña' value={password} onChangeText={setpassword} style={styles.input} />
            <Button title='Registrarse'  />
        </View>
    );
}