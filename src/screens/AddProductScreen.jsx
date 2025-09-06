import ProductForm from '../components/ProductForm';

import { addDoc,collection } from 'firebase/firestore';
import  {db}  from '../services/FireBase';

export default function addProductScreen({ navigation }){
    
    const handleAdd = async (product) => {
        await addDoc(collection(db,"products"),product);
        navigation.goBack();
    }

    return <ProductForm onSubmit={handleAdd}/>
}