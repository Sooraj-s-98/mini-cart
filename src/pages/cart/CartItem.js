import React from 'react';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';
import styles from './CartItem.module.scss';
const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useCart();

    return ( 
        <div className={`row no-gutters py-2 ${styles.itemBorder}`}>
            <div className="col-sm-2 p-2">
                <img
                alt={product.title}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.image ? "http://placehold.it/400x300" :"http://placehold.it/400x300"} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-6 p-2">
                <h5 className={`mb-1 ${styles.lineClamp}`}>{product.title}</h5>  
                <p className={`mb-1 ${styles.lineClamp}`}>{product.desc}</p>       
            </div>
            <div className="col-sm-2 p-2 text-right">
                 <button 
                 onClick={() => increase(product)}
                 className={`${styles.ripple}`}>
                  +
                 </button>
                 <span className={`${styles.countBox}`}> {product.quantity}</span>
                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}
                    className={`${styles.ripple}`}>
                      -
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className={`${styles.ripple}`}>
                      -
                    </button>
                 }
                 
            </div>
            <div className="col-sm-2 p-2 text-center ">
            <p className="mb-1">$ {formatNumber(product.price)} </p>
             </div>
        </div>
     );
}
 
export default CartItem;