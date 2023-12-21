FROM node:18

RUN mkdir -p /app/backend/gopoulet-backend

WORKDIR /app/backend/gopoulet-backend

COPY ./backend/gopoulet-backend ./
RUN npm install 

EXPOSE 27017
EXPOSE 4000

CMD ["npm", "start"]