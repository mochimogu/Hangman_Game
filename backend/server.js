const express = require('express');
const server = express();
const cors = require('cors');
const PORT = 4321 || 8080;

server.use(cors());
server.use(express.json());

const db = require('../backend/database');


server.listen(PORT, () => {
    console.log(`Listening to Port : ${PORT}`);
})

server.get('/' , (request, response) => {
    response.send("Success");
})



