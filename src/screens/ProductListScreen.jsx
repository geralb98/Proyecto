import { useState, useEffect } from 'react';
import { View, FlatList, Button } from 'react-native';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../services/FireBase';
import ProductItem from '../components/ProductItem';
import { signOut } from 'firebase/auth';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  // Obtener productos en tiempo real
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });

    // Limpiar listener al desmontar
    return () => unsub();
  }, []);

  // Función para eliminar producto
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      console.log("Producto eliminado:", id);
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Button title='Agregar Producto' onPress={() => navigation.navigate("AddProduct")} />
      <Button title='Cerrar Sesión' onPress={() => signOut(auth)} />
      
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            product={item}
            onEdit={() => navigation.navigate("EditProduct", { product: item })}
            onDelete={() => handleDelete(item.id)} // Pasamos el id del producto
          />
        )}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
