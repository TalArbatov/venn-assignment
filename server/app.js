require('dotenv').config();
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT;
const publicPath = path.join(__dirname, '..', 'client', 'public');
app.use('/', express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})