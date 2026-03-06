# Usamos una imagen ligera de Node
FROM node:18-alpine

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto que definimos
EXPOSE 4000

# Comando para iniciar la app
CMD ["npm", "start"]