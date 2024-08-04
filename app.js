import express from "express"
import cors from 'cors'
import fs from 'fs'
import bodyParser from "body-parser"
import db from './connection.js'
import response from "./response.js"


const app = express()
const port = 3200;

app.use(bodyParser.json())

app.use(cors())
// app.get adalah ROUTE 
app.get('/',(req,res)=>{
   db.query("SELECT*FROM tbl_mahasiswa",(err,result)=>{
     response(200,result,"get all data from mahasiswa",res)
   }) 
})
app.get('/banner', (req, res) => {
  const data = getData('./data/Banner.json')
  res.json(data)
})

app.get('/category', (req, res) => {
  const data = getData('./data/Category.json')
  res.json(data)
})

app.get('/product', (req, res) => {
  const data = getData('./data/Product.json')
  res.json(data)
})

app.get('/product/:id', (req, res) => {

  const data = findeData(req.params.id)
  res.json(data)

})
app.post('/login',(req,res) => {
  console.log({requestFromOutside:req.body})
  res.send("login berhasil")
})
app.put('/username',(req,res)=>{
  console.log({updateData:req.body})
  res.send('update berhasil')
})

app.listen(port, () => {
  console.log(`server sudah berjalan di localhost ${port}`)
})


const getData = (path) => {
  const data = fs.readFileSync(path, 'utf-8', (err, data) => data)
  return JSON.parse(data)
}


const findeData = (id) => {
  const dataProduct = getData('./data/Product.json')
  const findProduct = dataProduct.find((data) => data.id == id)
  if (!findProduct) {
    let dummy = [
      {
        "id": 12,
        "brand": "data tidak ditemukan",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus...",
        "price": 2500000,
        "promo": 2499999,
        "category": "SMARTPHONE",
        "image": ["https://i.postimg.cc/JnfcjLZR/sepatu-1.jpg"]
      }
    ]
    return dummy
  }
  return findProduct
}