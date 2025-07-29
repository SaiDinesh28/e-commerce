import React from "react";
import "./Products.css"
function Products({current_products,addToCart}){
    console.log("Products component loaded");
    console.log(current_products);
    return (<div className="products-container">
       {current_products.map((product) => 
       <div key={product.id} className="product-card">
        <img src={`/assets/${product.image}`} alt={`${product.name}`} />
        <div className="product-info">
        <p>{product.name}</p>
        <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>

       </div>)}
    </div>);
}

export default React.memo(Products);