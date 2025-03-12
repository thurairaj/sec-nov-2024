const express = require('express');
const app = express();


function logger(req, res, next) {
    console.log(`${req.method} ${req.originalUrl} ${JSON.stringify(res.json())}`);
}


app.use(express.json());
app.use(logger);

// fetch data GET
app.get('/destination', (req, res, next) => {
    res.json('Hello, Node.js!');
    next();
})

// POST :
app.post('/destination', (req, res, next) => {
    res.json({...req.body, status: true});
})

// PUT
app.put('/destination', (req, res) => {
    res.json({...req.body, status: true});
})


app.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
})
