const express = require('express');
const app = express();
const port = 3000; // Define the port number
const path = require('path');

// Middleware to parse JSON data
app.use(express.json());

app.use(express.static(path.join(__dirname, '/')));

// Basic route
app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/Style', (req, res) => {
    res.sendFile(path.join(__dirname + '/css/style.css'));
});

app.get('/JS', (req, res) => {
    res.sendFile(path.join(__dirname + '/script.min.js'));
});

app.use('/Style', express.static('css/style.css', {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    },
}));

app.use('/JS', express.static('js/script.js', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'script/js');
        }
    },
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
