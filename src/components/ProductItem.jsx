import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../styles/StylesProductItem";

export default function ProductItem({product, onEdit, onDelete}){
    return(
        <View>
            <Text>{product.name} - ${product.price}</Text>
            <Button title="Editar" onPress={() => onEdit(product)}/>
            <Button title="Eliminar" onPress={() => onDelete(product.id)}/>    
        </View>
    )
}