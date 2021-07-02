const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000
const {initialConnection} = require('./DBconnection/db.connect')
const {addProductToDB} = require('./models/product.model')


const cors = require('cors')

initialConnection();
addProductToDB();
app.use(cors());

app.get('/', (req, res) => {
    res.json({ test: "succesfull", name:"ajinkya"})
})

app.listen(PORT, () => console.log('server started at port', PORT))