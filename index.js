const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hwany314:8826@cluster0.nnkyp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongdoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World! 하이하이')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})