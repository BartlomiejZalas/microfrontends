FROM node:alpine

WORKDIR /app/

COPY config/ ./config
COPY public/ ./public
COPY scripts/ ./scripts
COPY src/ ./src
COPY *.json ./

EXPOSE 3000
RUN npm install && npm run build
CMD ["npm", "run", "serve"]