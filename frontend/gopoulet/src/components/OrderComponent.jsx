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
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve orders from sessionStorage or cookies on component load
    const storedOrders = JSON.parse(sessionStorage.getItem('orders') || '[]');
    const cookieOrders = JSON.parse(Cookies.get('orders') || '[]');
    const allOrders = [...new Set([...storedOrders, ...cookieOrders])]; // Merge and remove duplicates

    // Fetch the status for all orders
    const fetchOrderStatuses = async () => {
      const statuses = await Promise.all(allOrders.map(async (orderId) => {
        const response = await axios.get(`http://localhost:3000/orders/${orderId}`);
        return { id: orderId, status: response.data.status };
      }));

      setOrders(statuses);
    };

    fetchOrderStatuses();
  }, []);

  const handleOrderClick = () => {
    axios.post('http://localhost:3000/orders')
      .then(response => {
        console.log('Order creation response:', response.data);

        const orderId = response.data.order.uuid; // Access the order UUID
        const qrCodeData = response.data.qrCode; // Access the QR code data

        // Update state with the new order ID
        const updatedOrders = [...orders, orderId];
        setOrders(updatedOrders);

        // Save the new order ID to sessionStorage and cookies
        sessionStorage.setItem('orders', JSON.stringify(updatedOrders));
        Cookies.set('orders', JSON.stringify(updatedOrders));

        // Save the QR code data to sessionStorage
        sessionStorage.setItem('qrCodeData', qrCodeData);

        // Redirect to the commande route with orderId and qrCodeData in the state
        navigate('/commande', { state: { orderId: orderId, qrCodeData: qrCodeData } });
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
            {orders.map((order) => (
              <li key={order.id}>
                ID de la commande: {order.id} - Statut: {order.status}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={commonStyles.pageContainer}>
        <div style={commonStyles.contentContainer}>
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Entrez le numéro de votre commande"
            style={commonStyles.input}
          />
          <button style={commonStyles.button} onClick={handleStatusCheck}>
            Consulter le statut de la commande
          </button>
          {orderStatus && (
            <div style={commonStyles.statusMessage}>
              Statut de la commande: {orderStatus}
            </div>
          )}
        </div>
      </div>
      <div style={commonStyles.pageContainer}>
        <div style={commonStyles.contentContainer}>
          <div onClick={() => setShowLogin(!showLogin)} style={commonStyles.button}>
            {showLogin ? 'Fermer la connexion' : 'Accès restaurateur'}
          </div>
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
