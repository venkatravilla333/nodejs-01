
let Joi = require('joi')
var express = require('express')

var router = express.Router()

var products = [{id: 1, pname: 'apple'}, {id: 2, pname: 'banana'}, {id: 3, pname: 'grape'}]

//get all product

router.get('/', (req, res) => {
  var query = req.query
  console.log(query)
  res.send(products)
})

// get single product

router.get('/:id', (req, res) => {
  let product = products.find((prod) => {
    return prod.id === parseInt(req.params.id)
  })
  // console.log(product)
  if (!product) {
    return res.status(404).send('product with given id not found')
  }
  return res.send(product)
})


// post data

router.post('/', (req, res) => {

  var { error } =  validateProductname(req.body)

  if (error) {
    res.status(400).send(error.details[0].message)
  }
  
  // console.log(req)
  let product = {
    id: products.length+1,
    pname:  req.body.pname
  }
  products.push(product)
  res.status(201).send(products)
  
})

//delete product

router.delete('/:id', (req, res) => {

   let product = products.find((prod) => {
    return prod.id === parseInt(req.params.id)
 })
  console.log(product)
  if (!product) {
   return res.status(404).send('product with given id not found')
  }
  var index = products.indexOf(product)
  // console.log(index)
  
  products.splice(index, 1)
  res.send(products)
  
})

//update product

router.put('/:id', (req, res) => {

 var {error} = validateProductname(req.body)

  if (error) {
    res.status(400).send(error.details[0].message)
  }

    let product = products.find((prod) => {
    return prod.id === parseInt(req.params.id)
 })
  // console.log(product)
  if (!product) {
   return res.status(404).send('product with given id not found')
  }

  product.pname = req.body.pname

  return res.send(products)

  
})

function validateProductname(product) {
    let schema = Joi.object({
    pname: Joi.string().min(3).required(),
  })
  
  return schema.validate(product)
}

module.exports = router