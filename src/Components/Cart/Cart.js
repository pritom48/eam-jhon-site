import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const grandPrice = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>selected item : {cart.length}</p>
            <p>Total Price : <b>${total} </b></p>
            <p>Total Shipping : <b>${shipping}</b></p>
            <p>Tax : <b>${tax}</b></p>
            <h4>Grand Price : <b>${grandPrice}</b></h4>
        </div>
    );
};

export default Cart;