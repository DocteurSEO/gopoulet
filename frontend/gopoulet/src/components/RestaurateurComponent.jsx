// RestaurateurComponent.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurateurComponent = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    // Récupérer la liste de toutes les commandes depuis le backend
    axios.get('http://localhost:3000/orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des commandes :', error);
      });
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    // Mettre à jour le statut de la commande avec une requête au backend
    axios.put(`http://localhost:3000/orders/${orderId}`, { status: newStatus })
      .then((response) => {
        // Mettre à jour localement la liste des commandes avec le nouveau statut
        const updatedOrders = orders.map((order) => {
          if (order.id === orderId) {
            return { ...order, status: newStatus };
          }
          return order;
        });
        setOrders(updatedOrders);
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour du statut de la commande :', error);
      });
  };

  const notifyCustomer = (orderId) => {
    // Envoyer une notification au client lorsque la commande est prête
    // Vous pouvez implémenter cette fonctionnalité ici
  };

  return (
    <div>
      <h1>Interface Restaurateur</h1>
      <table>
        <thead>
          <tr>
            <th>ID de la commande</th>
            <th>Statut de la commande</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => updateOrderStatus(order.id, 'En préparation')}>
                  Mettre en préparation
                </button>
                <button onClick={() => updateOrderStatus(order.id, 'Prêt à récupérer')}>
                  Prêt à récupérer
                </button>
                <button onClick={() => notifyCustomer(order.id)}>
                  Envoyer une notification
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurateurComponent;
