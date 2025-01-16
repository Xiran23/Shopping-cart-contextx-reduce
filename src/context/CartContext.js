import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../reducer/cartReducer';
// import { useContext, } from 'react';


const initialState = {
    cartList :[],
    total: 0
}

const cartContext = createContext(initialState);

 export const CartProvider = ({children})=>{
    const [state , dispatch] = useReducer(cartReducer,initialState)
    const addTocart = (product)=>{
        const updatedCartList = state.cartList.concat(product);
        updateTotal(updatedCartList)
            dispatch({
                type:"ADD_TO_CART",
                payload:{
                    products:updatedCartList
                }

            })
    }

    const removeFromCart = (product)=>{
        const updatedCartList = state.cartList.filter(current =>current.id !== product.id);
        updateTotal(updatedCartList)
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products:updatedCartList
            }

        })
           
    }

    const updateTotal = (products) =>{
        let total = 0 ; 
        products.forEach(product => total = total+=product.price)

        dispatch({
            type:"UPDATE_TOTAL",
            payload:{
                total
            }
        })
    }

    const value = {
        // total:40,
        total:state.total,
        cartList:state.cartList,
        addTocart,
        removeFromCart

    };




    return (
        <cartContext.Provider value= {value}>

            {children}
        </cartContext.Provider>
    )
}

export const useCart = ()=>{

    const context = useContext(cartContext);
    return context
}


