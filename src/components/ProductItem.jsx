import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProductItem({ product, onEdit, onDelete }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{product.name} - ${product.price}</Text>
            <View style={styles.buttons}>
                <Button title="Editar" onPress={onEdit} />
                <Button title="Eliminar" color="red" onPress={onDelete} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5
    },
    text: {
        fontSize: 16,
        marginBottom: 10
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
