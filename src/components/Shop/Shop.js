import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart'
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart = (selectedProduct) => {
        const exist = cart.find(product=>product.id===selectedProduct.id)
        if(!exist){
            let newCart = [...cart,selectedProduct]
            if(cart.length<4){
                setCart(newCart)
            }
            else{
                alert('Maximum 4 item can add')
            }
        }
        else{
            alert('duplicate item selected')
        }

        
    }

    const handleChooseAgain = () =>{
        setCart([])
    }
    const handleChooseOne = () =>{
        if(cart.length != 0){
            const len = cart.length;
            const rand = Math.floor(Math.random()*len)
            let newChoosenCart = [cart[rand]]
            setCart(newChoosenCart)
        }
        else{
            alert('Please Select Atleast One Item.')
        }
    }

    
    return (
        <div className='shop'>
           <div className="products">
            {
                products.map(product=><Products  products={product} handleAddToCart={handleAddToCart} key={product.id}></Products>
                
                )
            }
            
           </div>
           <div className="cart">
            <Cart  cart={cart} handleChooseAgain={handleChooseAgain} handleChooseOne={handleChooseOne}></Cart>
            </div>
        </div>
    );
};

export default Shop;