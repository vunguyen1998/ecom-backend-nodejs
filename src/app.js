const compression = require('compression')
const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const app = express()

// Init middlewares
app.use(morgan('dev')) //Log request from client
app.use(helmet()) 
app.use(compression()) // Nén payload


// Init db

// Init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello world1'

    return res.status(200).json({
        message: 'Welcome TipJS',
        metadata: strCompress.repeat(100000)
    })
})

// Handling error

module.exports = app