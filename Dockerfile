# 1. Usamos una imagen ligera de Node.js como base
FROM node:18-alpine

# 2. Creamos y nos movemos a la carpeta de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiamos los archivos de dependencias
COPY package*.json ./

# 4. Instalamos las dependencias dentro del contenedor
RUN npm install

# 5. Copiamos el resto del código de la aplicación
COPY . .

# 6. Exponemos el puerto 3000
EXPOSE 3000

# 7. Comando para iniciar la aplicación
CMD [ "npm", "start" ]