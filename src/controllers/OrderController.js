const mongoose = require('mongoose')
const order = require('../repositories/OrderRepository')
const guid = require('guid')
const authService = require('../services/authservice')
exports.post = async(req, res, next) => {
  try { 

    //Recupera o token
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    //decodifica o token
    const data = await authService.decodeToken(token)

    await order.create({
        customer: req.id,
        number: guid.raw().substring(0,6),
        items: req.body.items
    }
)
    res.status(201).send({
       message: 'Pedido cadastrado com sucesso!'
   })
} catch (e){
      res.status(500).send({
        message: 'Falha ao processar sua aquisição'
      })
}
}


exports.get = async(req, res, next) => {
    try { 
        var data = await order.get()
        res.status(200).send(data)
    } catch (e){
          res.status(500).send({
            message: 'Falha ao processar sua aquisição'
          })
    }
  }
 