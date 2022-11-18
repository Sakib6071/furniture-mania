import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart'
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    
    return (
        <div className='shop'>
           <div className="products">
            {
                products.map(product=><Products  products={product} key={product.id}></Products>)
            }
            
           </div>
           <div className="cart">
            <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;