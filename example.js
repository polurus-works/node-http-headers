const express = require('express');
const HttpHeader = require('./http');

const app = express();

// Use the setDefaultHeaders middleware
app.use(HttpHeader.setDefaultHeaders);

// @get route
app.get('/', (req, res) => {
    res.json({ message: 'GET request received.' });
});

// @post route
app.post('/', (req, res) => {
    res.json({ message: 'POST request received.' });
});


// Handle unsupported methods
app.all('*', HttpHeader.methodNotAllowed);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//Usage:
// curl -X DELETE http://localhost:3000

// Output:
// {
//     "error": "Method not allowed."
// }