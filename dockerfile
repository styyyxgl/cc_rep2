FROM node:20-slim

WORKDIR /app

# Copiem doar fișierele esențiale pentru instalare rapidă a dependențelor
COPY package*.json ./
RUN npm ci --omit=dev

# Apoi copiem restul codului
COPY . .

EXPOSE 4000
CMD ["node", "index.js"]
