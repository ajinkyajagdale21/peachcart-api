const express = require('express')
const app = express();
const PORT = process.env.PORT || 8000

const cors = require('cors')
app.use(cors());

app.get('/', (req, res) => {
    res.json({ test: "succesfull", name:"ajinkya"})
})

app.listen(PORT, () => console.log('server started at port', PORT))