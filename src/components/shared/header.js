import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
    const {itemCount,total} = useContext(CartContext);
    return ( 
        <header className={`${styles.header} d-flex justify-content-center mx-5`}>
            <div className="d-flex justify-content-between w-100">
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <div className="d-flex">
            <Link to='/cart'><div className="d-flex flex-column "><span>${total}</span> <span>Items{" "}{itemCount}</span></div></Link>
            <span>
                <img className={styles.icon} src="/images/cartB.png" alt="cart" />
            </span>
            </div>
            </div>
        </header>
     );
}
 
export default Header;