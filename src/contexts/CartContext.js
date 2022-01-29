import React, { createContext, useReducer, useEffect } from 'react';
import { CartReducer, sumItems } from './CartReducer';
import axios from 'axios'

export const CartContext = createContext()

const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...sumItems(storage), checkout: false };

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState)

useEffect(()=> {
    if(localStorage.getItem('first_load')===null){
    getCartList();
    }
},[]
)

const getCartList=async()=>{
    
  const response= await axios.get("http://dnc0cmt2n557n.cloudfront.net/products.json");
  if(response.status===200){
    initial(response.data.products)
    console.log("response",response.data)
    localStorage.setItem('first_load',"true")
  }
}
const initial = payload => {
    dispatch({type: 'INITIAL_ITEMS', payload})
    console.log("response payload",payload)
}
    const increase = payload => {
        dispatch({type: 'INCREASE', payload})
    }

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload})
    }

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload})
    }

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const handleCheckout = () => {
        console.log('CHECKOUT', state);
        dispatch({type: 'CHECKOUT'})
    }

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
     );
}
 
export default CartContextProvider;