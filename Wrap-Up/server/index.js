const express = require('express');
const getData = require('./getData')

const app = express();
const port = 3000;

app.get('/api/data', getData)

app.get('/api/data/:id', getData)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})