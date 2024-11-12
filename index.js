


// var http = require('http')

// var server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('hello node js')
//     res.end()
//   }
//   if (req.url === '/products') {
//     res.write(JSON.stringify([{pname: 'apple'}, {pname: 'banana'}, {pname: 'grape'}]))
//     res.end()
//   }
//   if (req.url === '/products/:id') {
   
//   }
  
// })

// server.listen(5000, () => {
//   console.log('server stated in port 5000')
// })

var dotenv = require('dotenv').config()
const express = require('express')



let app = express()

app.use(express.json()) //parsing json into js

var products = [{id: 1, pname: 'apple'}, {id: 2, pname: 'banana'}, {id: 3, pname: 'grape'}]

app.get('/', (req, res) => {
  res.send('hello express')
})

//get all product

app.get('/api/products', (req, res) => {
  var query = req.query
  console.log(query)
  res.send(products)
})

// get single product

app.get('/api/products/:id', (req, res) => {
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

app.post('/api/products', (req, res) => {
  
  // console.log(req)
  let product = {
    id: products.length+1,
    pname:  req.body.pname
  }
  products.push(product)
  res.status(201).send(products)
  
})

//delete product

app.delete('/api/products/:id', (req, res) => {

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

app.put('/api/products/:id', (req, res) => {

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






var PORT = process.env.PORT || 3000

// console.log(PORT)

app.listen(PORT, () => {
  console.log(`server stated in port${PORT}`)
})

