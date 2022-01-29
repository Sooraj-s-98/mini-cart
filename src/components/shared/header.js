import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
    const {itemCount,total} = useContext(CartContext);
    return ( 
        <header className={styles.header}>
            <Link to='/'>Store</Link>
            <Link to='/about'>About</Link>
            <Link to='/cart'><div className="d-flex flex-column "><span>${total}</span> <span>Items{" "}{itemCount}</span></div></Link>
        </header>
     );
}
 
export default Header;