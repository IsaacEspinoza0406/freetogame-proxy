const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/games', async (req, res) => {
    try {
        const response = await axios.get(`${process.env.EXTERNAL_API_URL}/games`);
        res.json(response.data);
    } catch (error) {
        console.error("Error al conectar con la API:", error.message);
        res.status(500).json({ error: 'Error interno del servidor al consumir la API' });
    }
});

app.listen(PORT, () => {
    console.log(`Servicio corriendo en http://localhost:${PORT}`);
});