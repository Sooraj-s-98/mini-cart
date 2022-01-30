import React from 'react';
import { useCart } from '../../hooks/useCart';
import styles from './popOverCart.module.scss';

const PopOverCart = () => {
    const { cartItems, removeProduct } = useCart();
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                        {cartItems.map(product =>
                            <div className={`row ${styles.poplist}`} key={product.id}>
                                <div className=" col-2"> <span className="close " onClick={() => removeProduct(product)}>&times;</span> </div>
                                <div className=" col-8"> 
                                <h6  className={`${styles.title}`} >{product.title}</h6>
                                <p className={`mb-1 ${styles.price}`}>${product.price}</p>   
                                 </div>
                                 <div className=" col-2"> <span className="row">Qty{" "}{product.quantity}</span> </div>
                            </div>)}
                    </div>
                </div>
        </>
    );
}
export default PopOverCart;