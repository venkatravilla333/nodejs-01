

let mongoose = require('mongoose')

let productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }

}, { timestamps: true })

let Product = mongoose.model('products', productSchema)

module.exports = Product