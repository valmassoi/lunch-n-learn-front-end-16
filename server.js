'use strict'

const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/public/'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'))
})

app.get('/images/:file', (req, res) => {
  res.sendFile(path.resolve(__dirname, `./public/images/${req.params.file}`))
})

const PORT = process.env.PORT || 8081

const server = http.Server(app)
server.listen(PORT, () => {
  console.log(`Server Running on PORT: ${PORT}`)
})
