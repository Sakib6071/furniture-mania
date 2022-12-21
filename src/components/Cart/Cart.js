import React from 'react';
import Cartproduct from '../Cartproduct/Cartproduct';
import './Cart.css'
const Cart = ({cart,handleChooseAgain,handleChooseOne, removeSpecificItem}) => {
   
    return (
       
        <div className='cart'>
           <h2 className='cartHeader'>Selected Furniture</h2>
           <div className="selectedProduct">
           {
           cart.map(item=><Cartproduct item={item} removeSpecificItem={removeSpecificItem} key={item.id}></Cartproduct>)
           }
           </div>
           <div className="buttons">
            <button onClick={()=>handleChooseOne()}>CHOOSE 1 FOR ME</button>
            <button onClick={()=>handleChooseAgain()}>CHOOSE AGAIN</button>
           </div>
        </div>
    );
};

export default Cart;