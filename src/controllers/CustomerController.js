const mongoose = require('mongoose')
const repository = require('../repositories/CustomerRepository')
const md5 = require('md5')
const authService = require('../services/authservice')

exports.post = async(req, res, next) => {
    try { 
      await repository.create({
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password + global.SALT_KEY),
        roles: ["user"]
      })
      res.status(201).send({
         message: 'Cliente cadastrado com sucesso!'
     })
  } catch (e){
        res.status(500).send({
          message: 'Falha ao processar sua aquisição'
        })
  }
    }
   
   
  
  
  exports.get = async(req, res, next) => {
    try { 
        var data = await repository.get()
        res.status(200).send(data)
    } catch (e){
          res.status(500).send({
            message: 'Falha ao processar sua aquisição'
          })
    }
  }
  

  exports.authenticate = async(req, res, next) => {
    try { 
   
      const customer = await repository.authenticate({
        email: req.body.email,
        password: md5(req.body.password + global.SALT_KEY)
      })

      if(!customer) {
        res.status(404).send({
          message: 'Usuario ou senha invalidos'
        })
        return
      }

      const token = await authService.generateToken({
        id: customer._id,
        email: customer.email,
        name: customer.name,
        roles: customer.roles
      })


      res.status(201).send({
        token: token,
        data: {
          email: customer.email,
          name: customer.name
        }
      })
  } catch (e){
        res.status(500).send({
          message: 'Falha ao processar sua aquisição'
        })
  }
    }
   
   
  
  
  exports.refreshToken = async(req, res, next) => {
    try {
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      const data = await authService.decodeToken(token);

      const customer = await repository.getById(data.id);

      if (!customer) {
          res.status(404).send({
              message: 'Cliente não encontrado'
          });
          return;
      }

      const tokenData = await authService.generateToken({
          id: customer._id,
          email: customer.email,
          name: customer.name,
          roles: customer.roles
      });

      res.status(201).send({
          token: token,
          data: {
              email: customer.email,
              name: customer.name
          }
      });
  } catch (e) {
      res.status(500).send({
          message: 'Falha ao processar sua requisição'
      });
  }
  }
  