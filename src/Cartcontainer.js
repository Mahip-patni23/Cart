import React from 'react';
import { useGlobalcontext } from './Context';
import CartItem from './CartItem';

const Cartcontainer = () => {
    const {items, total, clearItems} = useGlobalcontext()

    if(items.length === 0){
      return <div className="cart-section">
        <section className="cart-center">
          <h2>your cart</h2>
          <h4>Is Currently Empty</h4>
        </section>
      </div>
    }

    return <div className="cart-section">
      <section className="cart-center">
        <h2>Your Cart</h2>
        <div className="items-container">
          {
            items.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>
            })
          }
          <footer className="cart-footer">
            <hr />
            <p>Total <span>${total}</span></p>
            <button className="clear-btn" onClick={clearItems}>clear cart</button>
          </footer>
        </div>
      </section>
      </div>
}

export default Cartcontainer