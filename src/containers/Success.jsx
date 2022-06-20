import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useAddress from '../hooks/useAdress';
import '../styles/components/Success.css';

export default function Success() {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const totalAddress = `${buyer[0]?.address},${buyer[0]?.city}`;
  const realAddress = useAddress(totalAddress);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Gracias por tu Compra,{buyer[0]?.name}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="Success-map">
          {realAddress.length > 0 && (
            <Map
              lat={realAddress[0]?.latitude}
              lon={realAddress[0]?.longitude}
            />
          )}
        </div>
      </div>
    </div>
  );
}
