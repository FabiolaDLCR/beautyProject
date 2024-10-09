import React, { useState, useEffect, useContext } from 'react';
import { getProducts } from '../../firebase/db'; 
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext.jsx';
import './ItemListContainer.css'; 

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { category } = useParams();  
    const { addToCart } = useContext(CartContext); // Contexto para agregar al carrito

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

    // Función para ver los detalles del producto seleccionado
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    // Función para cerrar el modal de detalles del producto
    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    // Función para agregar el producto al carrito
    const handleAddToCart = (quantity) => {
        if (selectedProduct) {
            addToCart(selectedProduct, quantity); // Agregar al carrito desde el modal
            handleCloseModal(); // Opcional: cierra el modal después de agregar
        }
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
                            {/* Componente ItemCount para agregar cantidad al carrito */}
                            <ItemCount 
                                initial={1} 
                                stock={product.stock || 10} // Asumiendo que tienes el stock en el producto
                                onAdd={(quantity) => addToCart(product, quantity)} // Agregar directo al carrito
                            />
                            <button onClick={() => handleViewDetails(product)}>
                                Ver detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de detalles del producto seleccionado */}
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
                        {/* ItemCount dentro del modal para agregar al carrito */}
                        <ItemCount 
                            initial={1} 
                            stock={selectedProduct.stock || 10} // Asumiendo que tienes el stock en el producto
                            onAdd={handleAddToCart} // Agregar el producto seleccionado con la cantidad
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;
