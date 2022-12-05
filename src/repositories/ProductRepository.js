const mongoose = require('mongoose')
const Product = mongoose.model('Product')


exports.create = async(data) => {
    var product = new Product(data)
    await product.save()
}


exports.get = async() => {
    const res = await Product.find({
      active:true},
      'title price slug')
      return res
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
        slug: slug,
        active:true},
        'tittle description price slug tags')
        return res
      
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id)
    return res
}

exports.getByTag = async(tags) => {
    const res = await Product
        .find({
        tag: tags,
        active:true},
        'tittle description price slug tags')
    return res
}

exports.update = async(id, data) => {
    await Product
        .findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            price: data.price,
            slug: data.slug
            }
        })
}


exports.delete = async(id) => {
   await Product
        .findOneAndRemove(id)
}