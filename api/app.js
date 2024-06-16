const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const orderRoutes = require('./routes/order-routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', orderRoutes)

//database url :orders is database name, always use ip not localhost
mongoose.connect('mongodb://127.0.0.1:27017/orders')
    .then(() => {
        app.listen(3000)
    }).catch((err) => {
        consoe.log(err)
    })