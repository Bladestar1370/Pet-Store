// CategoryProducts.js
import './CategoryProducts.css';
import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import allProducts from '../Assets/all_products'; // Import the data

const CategoryProducts = () => {
     const { name } = useParams();
     const [products, setProducts] = useState([]);

     useEffect(() => {
          const filteredProducts = allProducts.filter(
               (product) => product.category.toLowerCase().includes(name.toLowerCase())
          );
          setProducts(filteredProducts);
     }, [name]);

     return (
          <div>
               <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Products</h2>
               <div className="product-list">
                    {products.map((product) => (
                         <div key={product.id} className="product-item">
                              <Link to={`/product/${product.id}`}> {/* Link to product details */}
                                   <img src={product.image} alt={product.name} />
                                   <h3>{product.name}</h3>
                                   <p>
                                        ${product.new_price.toFixed(2)}{' '}
                                        {product.old_price && (
                                             <span style={{ textDecoration: 'line-through', color: 'gray' }}>
                                                  ${product.old_price.toFixed(2)}
                                             </span>
                                        )}
                                   </p>
                              </Link>
                         </div>
                    ))}
               </div>
          </div>
     );
};

// const CategoryProducts = () => {
//      const { name } = useParams();
//      const [products, setProducts] = useState([]);

//      useEffect(() => {
//           // Filter products based on category
//           const filteredProducts = allProducts.filter(
//                (product) => product.category.toLowerCase().includes(name.toLowerCase())
//           );
//           setProducts(filteredProducts);
//      }, [name]);

//      return (
//           <div>
//                <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Products</h2>
//                <div className="product-list">
//                     {products.map((product) => (
//                          <div key={product.id} className="product-item">
//                               <img src={product.image} alt={product.name} />
//                               <h3>{product.name}</h3>
//                               <p>
//                                    ${product.new_price.toFixed(2)}{' '}
//                                    {product.old_price && (
//                                         <span style={{ textDecoration: 'line-through', color: 'gray' }}>
//                                              ${product.old_price.toFixed(2)}
//                                         </span>
//                                    )}
//                               </p>
//                          </div>
//                     ))}
//                </div>
//           </div>
//      );
// };

// const CategoryProducts = () => {
//      const { name } = useParams();
//      const [products, setProducts] = useState([]);

//      useEffect(() => {
//           setProducts(allProducts[name] || []); // Use imported data
//      }, [name]);

//      return (
//           <div>
//                <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Products</h2>
//                <div className="product-list">
//                     {products.map((product) => (
//                          <div key={product.id} className="product-item">
//                               <img src={product.image} alt={product.name} />
//                               <h3>{product.name}</h3>
//                               <p>${product.price.toFixed(2)}</p>
//                          </div>
//                     ))}
//                </div>
//           </div>
//      );
// };

export default CategoryProducts;