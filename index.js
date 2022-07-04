const errorHandler = require('./error-handler')
const express = require('express');
const helmet = require('helmet');
require('express-async-errors');
const cors = require('cors');
const path = require('path')

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(errorHandler)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, console.log(`Server is starting on ${port}...`));