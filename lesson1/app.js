const express = require('express')
const app = express()
const port = 3001
const serverName = "Server 1"
// const port = Math.floor(Math.random() * 50000)

app.get('/', (req, res) => {
  
  body = `<h1>App Running on ${serverName}</h1>`

  name = req.header("ngrok-auth-user-name")
  if (typeof name !== 'undefined') {
    body += 'Hi there ' + name
  }

  res.send(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})