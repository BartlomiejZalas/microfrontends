FROM node:alpine

WORKDIR /app/

COPY scripts/ ./scripts
COPY src/ ./src
COPY *.json ./
COPY *.js ./

EXPOSE 3001
RUN npm install && npm run build
CMD ["npm", "run", "serve"]