import React from 'react';


const CartItem = () => {
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-3">
                <img
                alt="Ola"
                style={{margin: "0 auto"}} 
                src="http://placehold.it/150x80" className="img-fluid d-block"/>
            </div>
            <div className="col-sm-3">
                <h4 className="mb-1">Product Title</h4>
                <p className="mb-1">Price: $ 23222 </p>
                
            </div>
            <div className="col-sm-3">
            </div>
            <div className="col-sm-3 text-right">
                 <button className="btn btn-light btn-ripple btn-sm mr-2">+</button>
                   <span className="p-1">2</span>
                 <button className="btn btn-light btn-ripple  btn-sm">-</button>
            </div>
        </div>
     );
}
 
export default CartItem;