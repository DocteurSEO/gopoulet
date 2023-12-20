set -e

cd ./backend
pwd
echo "install dependance"
npm install

cd ../frontend/gopoulet
pwd
echo "install dependance"
npm install
echo "build"
npm run build



serve -s dist