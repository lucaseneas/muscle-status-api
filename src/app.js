
const express = require('express');
const router = require('./router')
const app = express();

app.listen(3333, () => console.log('Server running on port 3333'))

app.use(router);

module.exports = app;

