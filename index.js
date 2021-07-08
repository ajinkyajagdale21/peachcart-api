const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000
const products =require("./routes/product.route")
const {initialConnection} = require('./DBconnection/db.connect')
//const {Product,addProductToDB} = require('./models/product.model')


const cors = require('cors')

initialConnection();
//addProductToDB();
app.use(cors());
app.use('/products',products)
app.get('/' , (req , res) => {
    res.send('hello express')
})
app.use((req , res) => {
    res.status(404).json({success : false  , message : 'page not found'})
})

app.use((err , req ,res , next) => {
    console.error(err.stack)
    res.status(500).json({success : false , message : 'something went wrong' , error : err.message})
})
app.listen(PORT, () => console.log('server started at port', PORT))