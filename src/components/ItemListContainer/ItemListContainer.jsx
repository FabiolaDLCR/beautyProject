import React, { useState, useEffect } from 'react';
import { data } from '../data.js';
import ItemCount from '../ItemCount/ItemCount.jsx';
import { useParams } from 'react-router-dom';
import './ItemListContainer.css'; 

export const ItemListContainer = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();  
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
       
        setLoading(true);
        
        
        const timer = setTimeout(() => {
            const filtered = category ? data.filter(product => product.category === category) : data;
            setFilteredData(filtered);
            setLoading(false);  
        }, 1000);

        return () => clearTimeout(timer); 
    }, [category]);

    /////modal detalles de producto
    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
        
            {loading ? (  
                <p>Cargando productos...</p>
            ) : (
                <div className="container-items">
                    {filteredData.map(product => (
                        <div className="item" key={product.id}>
                            <figure>
                                <img src={product.urlImg} alt={product.productName} />
                            </figure>
                            <div className="info-product">
                                <h2>{product.productName}</h2>
                                <p className="price">${product.price}</p>
                                <ItemCount initial={0} stock={10} />
                                <button onClick={() => handleViewDetails(product)}>
                                    Ver detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            
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