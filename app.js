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
app.get('/mahasiswa',(req,res)=>{
  res.send("INI MAHA SISWA MUNCUL")
   
})
app.get('/mahasiswa/:nim', (req, res) => {
  const id =req.params.nim
  res.send(`INI SPESIFIC ID by ${id}`)
  
  })

app.post('/mahasiswa', (req, res) => {
  res.send("INI POSTING")

})

app.put('/mahasiswa', (req, res) => {
 res.send("INI UNTUK PUT")
})

app.delete('/', (req, res) => {
res.send("INI UNTUK DELETE")
})
app.post('/login',(req,res) => {
  
})
app.put('/username',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`server sudah berjalan di localhost ${port}`)
})




