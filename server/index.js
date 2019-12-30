const path = require('path')
const express = require('express')
const http = require('http')
const getProducts = require('./getProducts');

const app = express()
// const { add, mul, selReverse } = require('./add.js')

// const {add} = require('./add.js')
// console.log(add([1,2,3]))
// const num1 = add(2,3)
// const num2 = mul(2,3)

// const product = num1 * num2
// console.log(product, selReverse([2,4,6,8,10,12,14,16], 3))
// const server = http.createServer((req, res) => {
//     console.log(req.url)

//     res.end("Hello World!");
// })
const port = 3000
// server.listen(port, (err)=>{
//     if(err){
//         console.log('error')
//     }
//     console.log(`Listening to Port ${port}`)
// })
app.get('/api/products', getProducts)
app.listen(port, (err) =>{
    if(err) {
        return console.log(error)
    }

    console.log(`Listening to Port ${port}`)
})
