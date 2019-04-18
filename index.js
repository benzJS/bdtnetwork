require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();
const PORT = 5000;

const authRoute = require('./routes/auth.route');
const networkRoute = require('./routes/network.route');

console.log(process.env.MONGO_CONNECTION);

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true });

app.use(logger('tiny'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/auth', authRoute);
app.use('/network', networkRoute);

app.get('/', (req, res) => {
    token = req.headers['authorization'];
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) {
            return res.status(403).json({
                success: false,
                message: 'Invalid token'
            })
        }
        return res.json(decoded);
    });
});

app.get('/api/helloworld', (req, res) => {
    res.json({greeting: 'Hello World!!!'})
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));