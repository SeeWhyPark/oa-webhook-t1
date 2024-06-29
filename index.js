//console.log("hello world!")

const express = require('express')
const app = express()
const port = 3000

//app.get('/', function (req, res) {
//  res.send('Hello World')

app.get('/:id', (req, res) => {
    const p = req.params
    //console.log(`path : ${p}`)
    console.log('path : ' + p)


    const q = req.query
    console.log(q)

    res.send(q)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})