const Order = require('../models/order')

async function createOrder(req, res) {
    const { items } = req.body

    const newOrder = new Order({ items })
    
    await newOrder.save()

    res.send({
        url: 'http://localhost:5173/success'
    })
}

exports.createOrder = createOrder