import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart'
import './Shop.css'
const Shop = () => {
    /* product setting state */
    const [products,setProducts]=useState([])

    /* cart updated state */
    const [cart,setCart]=useState([])

    /* products data fetch */
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])



    /* add to cart button handle (lifting up) */
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


    /* choose again button handle */
    const handleChooseAgain = () =>{
        setCart([])
    }



    /* choose one button handle */
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



    const removeSpecificItem = (id) => {
        // let newCart = cart;
        const exist = cart.filter(product=>product.id!=id)
        // const finding = cart.find(product=>product===exist)
        // const indexNumber = cart.indexOf(finding)
        // newCart.splice(indexNumber,1)
        setCart(exist)
        
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
            <Cart  cart={cart} handleChooseAgain={handleChooseAgain} handleChooseOne={handleChooseOne} removeSpecificItem={removeSpecificItem}></Cart>
            </div>
        </div>
    );
};

export default Shop;