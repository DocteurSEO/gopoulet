import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import commonStyles from '../styles/commonStyles';

const Commande = () => {
  const [orderStatus, setOrderStatus] = useState('en attente');
  const [orderId, setOrderId] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Retrieve orderId and qrCodeData from the location state if it exists
    const state = location.state || {};
    const storedOrderId = state.orderId || sessionStorage.getItem('orderId');
    const storedQrCodeData = state.qrCodeData || sessionStorage.getItem('qrCodeData');

    if (storedOrderId) {
      setOrderId(storedOrderId);
      axios.get(`http://localhost:3000/orders/${storedOrderId}`)
        .then(response => {
          setOrderStatus(response.data.status); // Update the order status
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du statut de la commande:', error);
        });
    }

    if (storedQrCodeData) {
      setQrCodeData(storedQrCodeData);
    }
  }, [navigate, location]);

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
        <h1>Statut de la commande</h1>
        <p>Statut : {orderStatus}</p>
        {orderId && <p>ID de la commande : {orderId}</p>}
        {qrCodeData ? (
          <img src={qrCodeData} alt="QR Code" style={commonStyles.qrCodeImage} />
        ) : (
          <p>Loading QR Code...</p>
        )}
        <button style={commonStyles.button} onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Commande;
