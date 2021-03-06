import React, { useRef, useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

export default function Information() {
  const [error, setError] = useState(false);
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;
  const navigate = useNavigate();

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apt: formData.get('apt'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    if (!Object.values(buyer).some((val) => val === '')) {
      addToBuyer(buyer);
      navigate('/checkout/payment');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Informacion - Ecomm Pay Store</title>
      </Helmet>

      <div className="Information">
        <div className="Information-content">
          <div className="Information-head">
            <h2>Informacion de Contacto</h2>
          </div>
          <div className="Information-form">
            <form ref={form}>
              <input type="text" placeholder="Nombre Completo" name="name" />
              <input
                type="text"
                placeholder="Correo Electronico"
                name="email"
              />
              <input type="text" placeholder="Direccion" name="address" />
              <input type="text" placeholder="Apt" name="apt" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Estado" name="state" />
              <input type="text" placeholder="Codigo Postal" name="cp" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
          {error && <h4> Por favor, complete todos los campos</h4>}
          <div className="Information-buttons">
            <div className="Information-back">
              <Link to="/checkout">Regresar</Link>
            </div>
            <div className="Information-next">
              <button type="button" onClick={() => handleSubmit()}>
                Pagar
              </button>
            </div>
          </div>
        </div>
        <div className="Information-sidebar">
          <h3>Pedido:</h3>
          {cart.map((item) => (
            <div className="Information-item" key={Math.random()}>
              <div className="Information-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
