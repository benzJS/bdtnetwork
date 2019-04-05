const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.get('/api/helloworld', (req, res) => {
    res.json({greeting: 'Hello World!!!'})
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));