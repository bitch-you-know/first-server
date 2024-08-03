import express from "express"
import cors from 'cors'
import fs from 'fs'


const app = express ()
const port = 3200;
app.use(cors())
app.get('/banner', (req,res)=>{
 const data = getData('./data/Banner.json')
 res.json(data)
})

app.get('/category', (req,res)=>{
    const data = getData('./data/Category.json')
    res.json(data)
   })

   app.get('/product', (req,res)=>{
    const data = getData('./data/Product.json')
    res.json(data)
   })

   app.get('/product/:id', (req,res)=>{

     const data = findeData(req.params.id)
      res.json(data)

   })

app.listen(port,()=>{
  console.log(`server sudah berjalan di localhost${port}`)
})


const getData =(path)=>{
    const data = fs.readFileSync(path,'utf-8',(err,data)=>data)
  return JSON.parse(data)
}


const findeData = (id) =>{
    const dataProduct = getData('./data/Product.json')
    const findProduct= dataProduct.find((data)=>data.id == id)
       if(!findProduct){
        let dummy =[
            {
                "id" : 12, 
                "brand" : "data tidak ditemukan", 
                "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus...", 
                "price" : 2500000,
                "promo" : 2499999, 
                "category" : "SMARTPHONE",
                "image" : ["https://i.postimg.cc/JnfcjLZR/sepatu-1.jpg"]
            }
        ]
        return dummy
       }
    return findProduct
}