import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

export default function Payment() {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  const paymentHandleSuccess = (data, details) => {
    if (details.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={Math.random()}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider
            options={{
              'client-id': String(process.env.CLIENT_ID),
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) =>
                actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: handleSumTotal(cart),
                      },
                    },
                  ],
                })
              }
              onApprove={(data, actions) =>
                actions.order.capture().then((details) => {
                  paymentHandleSuccess(data, details);
                })
              }
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div />
    </div>
  );
}
