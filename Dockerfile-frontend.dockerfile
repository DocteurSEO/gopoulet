# Utiliser l'image officielle Node.js 18
FROM node:18

# Créer les dossiers nécessaires pour les applications frontend et backend
RUN mkdir -p /app/frontend/gopoulet 
# Copier et installer les dépendances du frontend
WORKDIR /app/frontend/gopoulet
COPY ./frontend/gopoulet/ ./
RUN npm run build

# Exposer le port pour l'application frontend
EXPOSE 3000

# Servir l'application via un serveur HTTP lors du démarrage du conteneur
# Pour cela, nous installons 'serve' pour servir le contenu statique
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]

