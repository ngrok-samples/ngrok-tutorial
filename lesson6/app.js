const express = require('express')
const app = express()
const port = 3001
const serverName = "Server 1"
// const port = Math.floor(Math.random() * 50000)

app.get('/', (req, res) => {
  res.send(`<h1>App Running on ${serverName}</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})