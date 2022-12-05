const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config')

const app = express()
const router = express.Router()

//carrega os models
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')
//conexao com o banco
mongoose.connect(config.connectionString)


//carregar rotas
const indexRouter = require('./routes/IndexRoute')
const ProductRoute = require('./routes/ProductRoute')
const CustomerRoute = require('./routes/CustomerRoute')
const OrderRoute = require('./routes/OrderRoute')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



app.use('/', indexRouter)
app.use('/product', ProductRoute)
app.use('/customer', CustomerRoute)
app.use('/order', OrderRoute)


 module.exports = app