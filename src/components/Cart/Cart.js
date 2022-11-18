import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart'>
           <h2 className='cartHeader'>Selected Furniture</h2> 
           <div className="selectedProduct"></div>
           <div className="buttons">
            <button>CHOOSE 1 FOR ME</button>
            <button>CHOOSE AGAIN</button>
           </div>
        </div>
    );
};

export default Cart;