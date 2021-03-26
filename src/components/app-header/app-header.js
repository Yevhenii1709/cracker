import React from 'react';

const AppHeader = () => {
    return (
        <div className ="app-header">
            <div>
                <p>quantity</p>
                <p>total: 145</p>
                <p>details</p>
            </div>
            <div>
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