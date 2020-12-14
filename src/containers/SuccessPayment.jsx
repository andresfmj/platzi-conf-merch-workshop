import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Maps from '../components/Maps';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const SuccessPayment = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const loc = useGoogleAddress(buyer[0].address);

  return (
    <div className="SuccessPayment">
      <div className="SuccessPayment-content">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en tres dias a tu direccion</span>
        <div className="SuccessPayment-map">
          <Maps data={loc} />
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
