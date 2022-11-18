import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Products = ({products}) => {
    const {name,price,img} = products;

    return (
        <div className='card'>
           <img src={img} alt="product images" />
           <div className="productInfo">
            <p className="productName">{name}</p>
            <div className="cardFooter">
                <div className="price">${price}</div>
                <div className="cartDetail">
                   <button>
                   <span className='cartText'>Add To Cart</span>
                     <FontAwesomeIcon icon={faShoppingCart} color='white' size='lg'></FontAwesomeIcon>
                   </button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Products;