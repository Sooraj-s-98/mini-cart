import React from 'react';

import { useCart } from '../../hooks/useCart';
import { formatNumber } from '../../helpers/utils';

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useCart();

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.title}
                style={{margin: "0 auto", maxHeight: "50px"}} 
                src={product.image ? "http://placehold.it/400x300" :"http://placehold.it/400x300"} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.title}</h5>         
            </div>
            <div className="col-sm-4 p-2 text-right">
                 <button 
                 onClick={() => increase(product)}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                  +
                 </button>
                 <span className="box"> {product.quantity}</span>
                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}
                    className="btn btn-danger btn-sm mb-1">
                      -
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger btn-sm mb-1">
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