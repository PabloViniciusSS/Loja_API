const mongoose = require('mongoose')
const repository = require('../repositories/ProductRepository')

exports.post = async(req, res, next) => {
  try { 
    await repository.create(req.body)
    res.status(201).send({
       message: 'Produto cadastrado com sucesso!'
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

exports.getBySlug = async(req, res, next) => {
   try {
      var data = await repository.getBySlug(req.params.slug)
      res.status(200).send(data)
      }catch(e)  {
        res.status(500).send({
          message: 'Falha ao processar sua aquisição'
        })
      }
}

exports.getById = async(req, res, next) => {
  try {
    var data = await repository.getById(req.params.id)
    res.status(200).send(data)
    }catch(e)  {
      res.status(500).send({
        message: 'Falha ao processar sua aquisição'
      })
    }
}

exports.getByTag = async(req, res, next) => {
  try {
    var data = await repository.getByTag(req.params.tag)
    res.status(200).send(data)
    }catch(e)  {
      res.status(500).send({
        message: 'Falha ao processar sua aquisição'
      })
    }
}


exports.put = async(req, res, next) => {
  try { 
    await repository.update(req.params.id, req.body)
          res.status(201).send({
            message: 'Produto atualizado com sucesso! '
     })
} catch (e){
      res.status(500).send({
        message: 'Falha ao processar sua aquisição'
      })
}
  }
 


exports.delete = async(req, res, next) => {
  try { 
    await repository.delete(req.body.id)
    res.status(200).send({
      message:'Produto removido com sucesso! '
    })
    } catch (e){
          res.status(500).send({
            message: 'Falha ao processar sua aquisição'
          })
    }
 }
