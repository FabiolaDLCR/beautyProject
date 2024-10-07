import React, { useState, useEffect, useContext } from 'react';
import { getProducts } from '../../firebase/db'; 
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'; 
import { CartContext } from '../../context/cartContext.jsx'; // Importamos el CartContext

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { addToCart } = useContext(CartContext); // Usamos addToCart del contexto

    const { category } = useParams();  
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                if (category) {
                    setProducts(fetchedProducts.filter(product => product.category === category));
                } else {
                    setProducts(fetchedProducts); 
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    if (loading) {
        return <p>Cargando productos...</p>; 
    }

    return (
        <div>
            <h2 className='bienvenida'>Todos nuestros productos</h2>
            <div className="container-items">
                {products.map(product => (
                    <div className="item" key={product.id}>
                        <figure>
                            <img src={product.urlImg} alt={product.productName} />
                        </figure>
                        <div className="info-product">
                            <h2>{product.productName}</h2>
                            <p className="price">${product.price}</p>
                            <ItemCount initial={0} stock={10} />
                            <button onClick={() => addToCart()}> {/* Usa addToCart aquí */}
                                Agregar al carrito
                            </button>
                            <button onClick={() => handleViewDetails(product)}>
                                Ver detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>
                            &times;
                        </span>
                        <h2>{selectedProduct.productName}</h2>
                        <img src={selectedProduct.urlImg} alt={selectedProduct.productName} />
                        <p>{selectedProduct.description}</p>
                        <p className="price">Precio: ${selectedProduct.price}</p>
                        <ItemCount initial={0} stock={10} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
