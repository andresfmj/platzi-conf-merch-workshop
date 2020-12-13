import React from 'react';
import '../styles/components/Success.css';

const SuccessPayment = () => (
  <div className="SuccessPayment">
    <div className="SuccessPayment-content">
      <h2>Gracias por tu compra</h2>
      <span>Tu pedido llegara en tres dias a tu direccion</span>
      <div className="SuccessPayment-map">Google Maps</div>
    </div>
  </div>
);

export default SuccessPayment;
