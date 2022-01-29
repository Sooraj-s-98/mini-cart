import React from 'react';
import CartItem from './CartItem';
import styles from './CartProducts.module.scss';
import { useCart } from '../../hooks/useCart';

const CartProducts = () => {
    const { cartItems } = useCart();
    return (
        <div className={styles.p__container}>
            <div className="card card-body">
                {
                    cartItems.map(product => <CartItem key={product.id} product={product} />)
                }
            </div>
        </div>

    );
}

export default CartProducts;