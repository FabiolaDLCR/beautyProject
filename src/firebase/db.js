import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from './config';

const db = getFirestore(app);

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}

export const getProductById = async (id) => {
    const productRef = doc(db, "items", id);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
        return { id: productSnap.id, ...productSnap.data() };
    } else {
        throw new Error("Producto no encontrado");
    }
};
