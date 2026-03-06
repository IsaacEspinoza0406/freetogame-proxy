# Proxy Service - Actividad 6 AWOS.

Este repositorio contiene la capa de servicios desarrollada en **Node.js y Express**. Su propósito principal es actuar como un intermediario seguro entre la aplicación cliente (Frontend) y la API externa de FreeToGame.

## Justificación Arquitectónica.
En lugar de exponer las peticiones directamente desde el navegador (lo cual genera problemas de CORS y expone la lógica de negocio), este proxy se encarga de:
1. Recibir las peticiones del frontend local.
2. Hacer el consumo real hacia `https://www.freetogame.com/api`.
3. Retornar la data procesada en formato JSON al cliente.

## Endpoints Expuestos
* `GET /games` - Retorna la lista general de juegos.
* `GET /games/:id` - Retorna los detalles específicos de un juego según su ID.

## Ejecución con Docker.
Este servicio está configurado para correr de forma aislada en el puerto **4000** a través de Docker Compose.
```bash
docker compose up --build