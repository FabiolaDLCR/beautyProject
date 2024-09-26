import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data.js';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetailContainer = () => {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Buscar el producto por ID
        const foundProduct = data.find(item => item.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div className="item-detail">
            <h2>{product.productName}</h2>
            <img src={product.urlImg} alt={product.productName} />
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <ItemCount />
        </div>
    );
};

export default ItemDetailContainer;