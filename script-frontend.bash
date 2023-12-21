set -e

cd ./frontend/gopoulet
pwd
echo "Installation des dépendance du frontend"
npm install
echo "Contruction build"
npm run build

