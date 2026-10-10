Express.js

A modular backend server built with Node.js and Express.js. This project uses Express routers to organize API endpoints for authentication, balance management, sending and receiving funds, payments, and cards.

Project Structure

Express.js/
├── Server.js
├── auth.js
├── balance.js
├── send.js
├── receive.js
├── payment.js
├── cards.js
├── index.html
├── .env
├── package.json
└── README.md

Requirements

- Node.js
- npm (Node Package Manager)

Installation

Install the required dependencies:

npm install express cors dotenv

Environment Configuration

Create a ".env" file in the root directory:

PORT=3000

The server uses port "3000" by default if no environment variable is configured.

Server Setup

The "Server.js" file initializes the Express application, configures middleware, registers the routers, serves the homepage, and starts the server.

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
app.use('/receive', require('./receive'));
app.use('/payment', require('./payment'));
app.use('/cards', require('./cards'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

Express Routers

Each router is defined in its own file. This keeps the server organized and separates individual API responsibilities.

Every router follows this basic structure:

const express = require('express');
const router = express.Router();

// Define routes here

module.exports = router;

Available Routers

File| Route prefix| Purpose
"auth.js"| "/auth"| Authentication and user access
"balance.js"| "/balance"| Balance-related operations
"send.js"| "/send"| Sending funds
"receive.js"| "/receive"| Receiving funds
"payment.js"| "/payment"| Payment operations
"cards.js"| "/cards"| Card-related operations

Each router can define its own HTTP methods, request validation, and responses.

Example Router

Example implementation for "balance.js":

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Balance route is working',
        balance: 0
    });
});

module.exports = router;

Because the router is mounted at "/balance", its root endpoint is available at:

GET http://localhost:3000/balance

Running the Server

Start the server with:

node Server.js

To restart the server automatically during development, you can install and use Nodemon:

npm install --save-dev nodemon
npx nodemon Server.js

Testing the API

You can test your endpoints using Postman, Insomnia, or "curl".

Example:

curl http://localhost:3000/balance

Expected response from the example router:

{
    "message": "Balance route is working",
    "balance": 0
}

The other endpoints will respond according to the routes implemented in their respective files.

Important Notes

- Ensure that all router files exist and export an Express router.
- Keep route filenames consistent with the "require()" statements in "Server.js".
- Use "/receive" consistently rather than "/recieve".
- Add authentication and authorization before exposing sensitive endpoints.
- Validate requests and handle errors appropriately.
- For real financial transactions, perform server-side balance checks and use database transactions.
- Never store raw card security codes or plaintext passwords.
- Configure CORS restrictions and HTTPS appropriately for production.

License

Add a license before distributing this project publicly.