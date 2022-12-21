import React from 'react';
import './Cartproduct.css'
import img from '../../img/trash.svg'
const Cartproduct = ({item, removeSpecificItem}) => {
//   console.log(item);
    return (
        <div className='container'>
            <img className='img' src={item.img} alt="" />
            <span className='title'>{item.name}</span>
           <button onClick={()=>removeSpecificItem(item.id)}>
           <img className='img' src={img} alt="" />
           </button>
        </div>
    );
};

export default Cartproduct;