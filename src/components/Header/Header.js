import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='navbar'>
            {/* navbar design */}
            <nav>
                <span className='logoTitle'>Furniture Mania</span>
                <FontAwesomeIcon icon={faShoppingCart} color='white' size='xl'></FontAwesomeIcon>
            </nav>
        </div>
    );
};

export default Header;