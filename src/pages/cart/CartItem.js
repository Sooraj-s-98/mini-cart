import React from 'react';
import { PlusCircleIcon } from '../../components/icons'
import { useCart } from '../../hooks/useCart';

const CartItem = ({product}) => {
    const { increase, decrease, removeProduct } = useCart();
    return ( 
        <div  className="row no-gutters py-2">
            <div className="col-sm-3  p-2">
                <img
                alt="Ola"
                style={{margin: "0 auto"}} 
                src={product.photo} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3 p-2">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: $ {product.price} </p>
                
            </div>
            <div className="col-sm-3">
            </div>
            <div className="col-sm-3 text-right">
                 <button 
                      onClick={() => increase(product)}
                  className="btn btn-light btn-ripple btn-sm mr-2">
                           <PlusCircleIcon width={"20px"}/>
                  </button>
                   <span className="p-1">{product.quantity}</span>
                   {product.quantity > 1
                &&
                 <button
                  onClick={() =>
                       decrease(product)
                  }
                  className="btn btn-light btn-ripple  btn-sm">
                       -
                      </button>}
                      {product.quantity === 1 
                      
                      &&
                      <button
                      onClick={() =>
                           removeProduct(product)
                      }
                      className="btn btn-light btn-ripple  btn-sm">
                           -
                          </button>}
            </div>
        </div>
     );
}
 
export default CartItem;