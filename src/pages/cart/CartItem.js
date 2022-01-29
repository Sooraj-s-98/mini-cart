import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


const CartItem = ({product}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);
    return ( 
        <div key={product.name} className="row no-gutters py-2">
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
                      onClick={() => increase(product.id)}
                  className="btn btn-light btn-ripple btn-sm mr-2">
                      +
                  </button>
                   <span className="p-1">{product.quantity}</span>
                 <button
                  onClick={() =>{
                      if(product.quantity > 1 ){
                       decrease(product.id)
                      }
                      else if(product.quantity === 1){
                        removeProduct(product)
                      }
                    }}
                  className="btn btn-light btn-ripple  btn-sm">
                      -</button>
            </div>
        </div>
     );
}
 
export default CartItem;