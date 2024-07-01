//console.log("hello world!")

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const port = 3000

//app.get('/', function (req, res) {
//  res.send('Hello World')

app.post('/oa/:id', (req, res) => {
    var p = req.params
    var q = req.query
    var b = req.body
    var h = req.header
    var message = req.body.message
    var source = req.body.source

//    console.log(p)
//    console.log(q)
    console.log(b)
    console.log(JSON.parse(b))
    console.log(message)
    console.log(source)
    console.log(h)

    res.writeHead(200,
        { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World!</h1>')
    res.end();
})

app.get('/oa/:id', (req, res) => {
    var p = req.params
    var q = req.query

    console.log('get')
    console.log(p)
    console.log(q)

    res.writeHead(200,
        { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World!</h1>')
    res.end();
})

function getOaWebhook(req, res) {
    var p = req.params
    var q = req.query

    console.log(p)
    console.log(q)

    res.writeHead(200,
        { 'Content-Type': 'text/html' })
    res.write('<h1>Hello World!</h1>')
    res.end();
}


// app.get('/:id', (req, res) => {
//     const p = req.params
//     //console.log(`path : ${p}`)
//     console.log('path : ' + p)


//     const q = req.query
//     console.log(q)

//     res.send(q)
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})