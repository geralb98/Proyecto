import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../styles/StylesProductForm';

export default function ProductForm({ onSubmit, initiaValues }) {
    const [name, setName] = useState(initiaValues?.name || '');
    const [price, setPrice] = useState(initiaValues?.price || '');

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Nombre del producto' 
                value={name} 
                onChangeText={setName} 
                style={styles.input} 
            />
            <TextInput 
                placeholder='Precio' 
                value={price} 
                onChangeText={setPrice} 
                style={styles.input} 
                keyboardType="numeric"
            />
            <Button 
                title='Guardar' 
                onPress={() => onSubmit({ name, price: parseFloat(price) })} 
            />
        </View>
    );
}
