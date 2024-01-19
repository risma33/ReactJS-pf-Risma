import { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import { useParams } from 'react-router-dom'
import { addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notificaciones/NotificationService"
import { getProducts } from '../../../asyncMock';

const ProductToupdate = () => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const productToAdd = async () => {
        try {
            setLoading(true)
            const objOrder = {
                items: products
            }

            const productsCollection = collection(db, 'products')

            for (const product of products) {

                const { id, ...productWithoutId } = product;

                const productDocRef = await addDoc(productsCollection, productWithoutId);
                console.log('Product added with ID:', productDocRef.id);
            }

        } catch (error) {
            console.log('error adding product:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const productsToAdd = await getProducts();
                setProducts(productsToAdd);
            } catch (error) {
                // Manejar errores aquí, por ejemplo, mostrar un mensaje de error
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Productos to Add</h1>
            <button onClick={productToAdd}>AddProducts</button>
            <div>
                {products.map((product) => (
                    <ItemCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductToupdate;