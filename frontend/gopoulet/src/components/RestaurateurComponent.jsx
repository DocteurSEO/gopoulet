import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RestaurateurComponent = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/orders')
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des commandes :', error);
      });
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    axios.put(`http://localhost:3000/orders/${orderId}`, { status: newStatus })
      .then((response) => {
        const updatedOrders = orders.map((order) => {
          if (order.uuid === orderId) {
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
    // Dans le futur, implémentation de la notification au client
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
            <tr key={order.uuid}>
              <td>{order.uuid}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => updateOrderStatus(order.uuid, 'En préparation')}>
                  Mettre en préparation
                </button>
                <button onClick={() => updateOrderStatus(order.uuid, 'Prêt à récupérer')}>
                  Prêt à récupérer
                </button>
                <button onClick={() => notifyCustomer(order.uuid)}>
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
