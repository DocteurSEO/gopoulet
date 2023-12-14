import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import roastedChicken from '../assets/img/cuisse-de-poulet.png';
import logo from '../assets/img/logo.png';
import commonStyles from '../styles/commonStyles';
import axios from 'axios';
import Cookies from 'js-cookie';

const OrderComponent = () => {
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);


  const handleOrderClick = () => {
    axios.post('http://localhost:3000/orders')
      .then(response => {
        const orderId = response.data.uuid;
        console.log('Commande créée:', orderId);
  
        // Stocker l'ID de la commande dans sessionStorage
        let orders = sessionStorage.getItem('orders');
        orders = orders ? JSON.parse(orders) : [];
        orders.push(orderId);
        sessionStorage.setItem('orders', JSON.stringify(orders));
  
        navigate('/commande');
      })
      .catch(error => {
        console.error('Erreur lors de la création de la commande:', error);
      });
  };
  const handleStatusCheck = () => {
    if (orderNumber) {
      axios.get(`http://localhost:3000/orders/${orderNumber}`)
        .then(response => {
          setOrderStatus(response.data.status);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du statut de la commande:', error);
        });
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/login', { username, password })
      .then(response => {
        // Gérer la réponse, par exemple enregistrer un token ou une session
        navigate('/restaurateur'); // Rediriger vers la page RestaurateurComponent
      })
      .catch(error => {
        console.error('Erreur d’authentification:', error);
        // Gérer les erreurs d'authentification
      });
  };
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Récupérer les commandes de sessionStorage au chargement du composant
    const storedOrders = sessionStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }

    // Récupérer les commandes des cookies
    const ordersFromCookie = Cookies.get('orders');
    if (ordersFromCookie) {
      setOrders(JSON.parse(ordersFromCookie));
    }
  }, []);

  useEffect(() => {
    // Charger les commandes de sessionStorage
    const storedOrders = sessionStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);
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
        <div>
      <h3>Commandes de la session :</h3>
      <ul>
        {orders.map((orderId, index) => (
          <li key={index}>ID de la commande: {orderId}</li>
        ))}
      </ul>
    </div>






      </div>
      <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
                {/* Nouveau champ de saisie pour le numéro de commande */}
                <input
          type="text"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          placeholder="Entrez le numéro de votre commande"
          style={commonStyles.input}
        />

        {/* Bouton pour consulter le statut de la commande */}
        <button style={commonStyles.button} onClick={handleStatusCheck}>
          Consulter le statut de la commande
        </button>

        {/* Message de statut */}
        {orderStatus && (
          <div style={commonStyles.statusMessage}>
            Statut de la commande: {orderStatus}
          </div>
        )}
        </div>
        </div>
      <div style={commonStyles.pageContainer}>
      <div style={commonStyles.contentContainer}>
                {/* Lien ou bouton pour afficher le formulaire de connexion */}
                <div onClick={() => setShowLogin(!showLogin)} style={commonStyles.button}>
                {showLogin ? 'Fermer la connexion' : 'Accès restaurateur'}
          </div>
                {/* Formulaire de connexion */}
                {showLogin && (
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nom d'utilisateur"
              style={commonStyles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              style={commonStyles.input}
            />
            <button type="submit" style={commonStyles.button}>
              Se connecter
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
    
  );
};

export default OrderComponent;
