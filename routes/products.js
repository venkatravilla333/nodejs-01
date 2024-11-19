
let Joi = require('joi')
var express = require('express')
const Product = require('../models/productModel')

var router = express.Router()

// var products = [{id: 1, pname: 'apple'}, {id: 2, pname: 'banana'}, {id: 3, pname: 'grape'}]

// //get all product

// router.get('/', (req, res) => {
//   var query = req.query
//   console.log(query)
//   res.send(products)
// })

// // get single product

// router.get('/:id', (req, res) => {
//   let product = products.find((prod) => {
//     return prod.id === parseInt(req.params.id)
//   })
//   // console.log(product)
//   if (!product) {
//     return res.status(404).send('product with given id not found')
//   }
//   return res.send(product)
// })


// // post data

// router.post('/', (req, res) => {

//   var { error } =  validateProductname(req.body)

//   if (error) {
//     res.status(400).send(error.details[0].message)
//   }
  
//   // console.log(req)
//   let product = {
//     id: products.length+1,
//     pname:  req.body.pname
//   }
//   products.push(product)
//   res.status(201).send(products)
  
// })

// //delete product

// router.delete('/:id', (req, res) => {

//    let product = products.find((prod) => {
//     return prod.id === parseInt(req.params.id)
//  })
//   console.log(product)
//   if (!product) {
//    return res.status(404).send('product with given id not found')
//   }
//   var index = products.indexOf(product)
//   // console.log(index)
  
//   products.splice(index, 1)
//   res.send(products)
  
// })

// //update product

// router.put('/:id', (req, res) => {

//  var {error} = validateProductname(req.body)

//   if (error) {
//     res.status(400).send(error.details[0].message)
//   }

//     let product = products.find((prod) => {
//     return prod.id === parseInt(req.params.id)
//  })
//   // console.log(product)
//   if (!product) {
//    return res.status(404).send('product with given id not found')
//   }

//   product.pname = req.body.pname

//   return res.send(products)

  
// })

// function validateProductname(product) {
//     let schema = Joi.object({
//     pname: Joi.string().min(3).required(),
//   })
  
//   return schema.validate(product)
// }

// module.exports = router
// let Joi = require('joi')
// var express = require('express')

// var router = express.Router()

// var products = [{id: 1, pname: 'apple'}, {id: 2, pname: 'banana'}, {id: 3, pname: 'grape'}]

//get all product

router.get('/', async(req, res) => {
  try {

    let allProducts = await Product.find()
    console.log(allProducts)

    if (!allProducts) {
      return res.status(404).send('No products')
    }
    return res.status(200).send(allProducts)
    
    
  } catch (error) {
    return res.status(500).send('internal server error')
  }
})

// get single product

router.get('/:id', async (req, res) => {
  try {
    console.log(req.params)
  let { id } = req.params
    let singleProduct = await Product.findById(id)
    console.log(singleProduct)
    if (!singleProduct) {
      return res.status(404).send('product with given id not found in db')
    }
    return res.status(200).send(singleProduct)
    
  } catch (error) {
     return res.status(500).send('internal server error')
  }
  
})


// post data

router.post('/', async (req, res) => {

  try {
    console.log(req.body)
    if (!req.body.name || !req.body.price) {
     return  res.status(400).send('require product name and price')
    }
    let newProduct = {
      name: req.body.name,
      price: req.body.price
    }

    let product = await Product.create(newProduct)
    console.log(product)

    if (!product) {
     return  res.status(404).send('Not created in DB')
    }
     return res.status(201).send(result)

  
 } catch (error) {
   return res.status(500).send('Internal server error')
 }
  
})

//delete product

router.delete('/:id', async (req, res) => {

 try {
    console.log(req.params)
  let { id } = req.params
    let singleProduct = await Product.findByIdAndDelete(id)
    console.log(singleProduct)
    if (!singleProduct) {
      return res.status(404).send('product with given id not found in db')
    }
    return res.status(200).send('deleted successfully')
    
  } catch (error) {
    return res.status(500).send('internal server error')
  }
  
})

//update product

router.put('/:id', async(req, res) => {

  try {
    console.log(req.params)
  let { id } = req.params
    let singleProduct = await Product.findByIdAndUpdate(id, req.body)
    console.log(singleProduct)
    if (!singleProduct) {
      return res.status(404).send('product with given id not found in db')
    }
    return res.status(200).send('updated successfully')
    
  } catch (error) {
    return res.status(500).send('internal server error')
  }
  
  
})



module.exports = router