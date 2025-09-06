import ProductForm from '../components/ProductForm';
import{ updateDoc, doc } from "firebase/firestore";
import  {db}  from "../services/FireBase";

export default function EditProductScreen ({ route, navigation }){
    const { product } = route.params;

    const handleEdit = async ( updated ) => {
        await updateDoc(doc(db, "products", product.id), updated);
        navigation.goBack();
    };

    return <ProductForm initialValues={product} onSubmit={handleEdit} />;
}