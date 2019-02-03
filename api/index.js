const compression = require('compression'); //reduces file sizes coming in
//TODO: add debugger
const express = require('express');

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});