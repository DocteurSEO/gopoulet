// src/components/OrderComponent.jsx
import React from 'react';
import roastedChicken from '../assets/img/cuisse-de-poulet.png';
import logo from '../assets/img/logo.png';
import commonStyles from '../styles/commonStyles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderComponent = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    // Envoie une requête de création de commande au backend
    axios.post('http://localhost:3000/orders')
      .then(response => {
        console.log('Commande créée:', response.data);
        // Supposons que le backend renvoie l'UUID dans response.data.uuid
        const orderId = response.data.uuid;
        sessionStorage.setItem('orderId', orderId);
        navigate('/commande');
      })
      .catch(error => {
        console.error('Erreur lors de la création de la commande:', error);
      });
  };

  return (
    <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
      <img src={logo} alt="Logo" style={commonStyles.logo} />
        <img src={roastedChicken} alt="Poulet Rôti" style={commonStyles.image} />
        <h2 style={commonStyles.textHeader}>La faim n'attend pas.</h2>
        <p style={commonStyles.text}>Votre poulet, si !</p>
        <button style={commonStyles.button} onClick={handleOrderClick}>
          Commander un poulet
        </button>
      </div>
    </div>
  );
};

export default OrderComponent;
