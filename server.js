//Server.js

require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', require('./auth'));
app.use('/balance', require('./balance'));
app.use('/send', require('./send'));
app.use('/recieve', require('./recieve'));
app.use('/payment', require('./payment'));
app.use('/cards', require('./cards'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});