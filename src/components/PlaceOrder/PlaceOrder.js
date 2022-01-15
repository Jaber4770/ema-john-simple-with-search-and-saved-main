import React from 'react';
import img from '../../images/giphy.gif';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div className='d-flex'>
            <img src={img} alt="" />
            <div className='complate-text'>
                <h1>Thank you!</h1>
                <h2>Your Order have been taken!</h2>
                <h3>Wait for delivery!</h3>
            </div>
        </div>
    );
};

export default PlaceOrder;