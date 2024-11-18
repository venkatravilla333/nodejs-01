

var myappDebug = require('debug')('x')
// var dbDebug = require('debug')('app:db')

let mongoose = require('mongoose')


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
//   expressdebug('server stated in port 5000')
// })


let cors = require('cors')

let auth = require('./middlewares/auth')
let logging = require('./middlewares/logging')
var dotenv = require('dotenv').config()
const express = require('express')
let productsRouter = require('./routes/products')
let homeRouter = require('./routes/home')



let app = express()

app.use(express.json()) //parsing json into js
app.use(express.urlencoded({
  extended: true
})) //parsing json into js

app.use(cors())

app.use(logging)
app.use(auth)

app.use('/api/products', productsRouter)
app.use('/', homeRouter)


var PORT = process.env.PORT || 3000

// console.log(PORT)

app.listen(PORT, () => {
  // console.log(`server stated in port${PORT}`)
  console.log(`server stated in port ${PORT}`)
})

var dbCon = process.env.mongodb_url
mongoose.connect(dbCon)
  .then(() => {
   console.log('Db connected successfully')
  })
  .catch(() => {
    console.log('Error while connecting with db')
  })


