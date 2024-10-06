import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase/db'; 
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true); 
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await getProductById(id);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <p>Cargando producto...</p>; 
    }

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.productName}</h2>
                    <img src={product.urlImg} alt={product.productName} />
                    <p>{product.description}</p>
                    <p className="price">Precio: ${product.price}</p>
                    <ItemCount initial={0} stock={10} />
                </div>
            ) : (
                <p>Producto no encontrado.</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
