set -e

cd ./backend/gopoulet-backend
pwd
echo "Installation des dépendances du backend "
npm install

cd ../../frontend/gopoulet
pwd
echo "Installation des dépendance du frontend"
npm install
echo "Contruction build"
npm run build

serve -s dist