const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { user, cars } = require('./seed');
const { checkLogin } = require('./middlewares');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', checkLogin, (req, res) => res.json(user));

app.get('/models', (req, res) => res.json(cars));

app.get('/healthcheck', (req, res) => res.send('OK'));

app.listen(PORT, () => {
  console.log(`Api listening at http://localhost:${PORT}`);
});
