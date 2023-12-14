// server.js
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import Order from './orderModel.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Impossible de se connecter à MongoDB', err));

// Route pour créer une nouvelle commande
app.post('/orders', async (req, res) => {
    try {
      const newOrder = new Order({ uuid: uuidv4() }); // Génère un UUID pour la nouvelle commande
      await newOrder.save();
      res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Une erreur interne est survenue" });
    }
  });

// Route pour obtenir le statut de la commande par UUID
app.get('/orders/:uuid', async (req, res) => {
  try {
    const order = await Order.findOne({ uuid: req.params.uuid });
    if (!order) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route pour mettre à jour le statut de la commande par UUID
app.put('/orders/:uuid', async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate({ uuid: req.params.uuid }, { status: req.body.status }, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Commande non trouvée' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
