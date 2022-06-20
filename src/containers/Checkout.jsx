import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

export default function Checkout() {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, index) => {
    removeFromCart(product, index);
  };

  const handleTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de Pedidos' : 'No existen pedidos'}</h3>
        {cart.map((item, index) => (
          <div className="Checkout-item" key={Math.random()}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item, index)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total : ${handleTotal()}</h3>

          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
}
