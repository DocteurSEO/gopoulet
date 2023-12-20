import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import commonStyles from '../styles/commonStyles'; // Importez vos styles communs

const Commande = () => {
  const [orderStatus, setOrderStatus] = useState('en attente');
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderId = sessionStorage.getItem('orderId');
    setOrderId(storedOrderId); // Sauvegardez l'ID de commande dans l'état

    if (storedOrderId) {
      axios.get(`http://localhost:3000/orders/${storedOrderId}`)
        .then(response => {
          setOrderStatus(response.data.status); // Mettez à jour le statut de la commande
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du statut de la commande:', error);
        });
    }
  }, []);

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
        <h1>Statut de la commande</h1>
        <p>Statut : {orderStatus}</p>
        {orderId && <p>ID de la commande : {orderId}</p>}
        <button style={commonStyles.button} onClick={() => navigate('/')}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Commande;
