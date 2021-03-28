import React from 'react';

import './app-header.scss';

const AppHeader = () => {
    return (
        <div className ="header">
            <div className='order-info'>
                <p>quantity</p>
                <p>total: 145</p>
                <p>details</p>
            </div>
            <div className = "menu">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>Checkout</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>
    )
}

export default AppHeader;