const express = require('express')
const app = express()
const port = 3002
const serverName = "Server 2"
// const port = Math.floor(Math.random() * 50000)

app.get('/', (req, res) => {
  res.send(`<h1>App running on ${serverName}</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})