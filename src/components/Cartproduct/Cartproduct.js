import React from 'react';
import './Cartproduct.css'
import img from '../../img/trash.svg'
const Cartproduct = ({item}) => {

    
    return (
        <div className='container'>
            <img className='img' src={item.img} alt="" />
            <span className='title'>{item.name}</span>
            <img className='img' src={img} alt="" />
        </div>
    );
};

export default Cartproduct;