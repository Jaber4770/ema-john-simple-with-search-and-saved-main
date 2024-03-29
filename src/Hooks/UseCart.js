import { useEffect } from "react";
import { useState } from "react";
import {getStoredCart } from "../utilities/fakedb";

const UseCart = products =>{
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        if(products.length){
            const saveCart = getStoredCart()
            const storedCart = [];
            for(const key in saveCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    // set quantity
                    const quantity = saveCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    } ,[products])
    return[cart, setCart];
}

export default UseCart;