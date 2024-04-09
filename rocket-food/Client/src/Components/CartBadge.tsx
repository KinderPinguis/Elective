import React from 'react';
import './CartBadge.css';

const CartBadge = () => {
    const cartNumber = localStorage.getItem('cartNumber') || "0";

    return (
        <div className="cart-badge">
            <span>{cartNumber}</span>
        </div>
    );
};

export default CartBadge;