const express = require('express')
const app = express()
const port = 8080
const serverName = "Server 1"

app.get('/', (req, res) => {
  var body = `<h1>App Running on ${serverName}</h1>`;
  
  let name = req.header("ngrok-auth-user-name");
  console.log(`Incoming request from ${name}`);
  if (typeof name !== 'undefined') {
    body += 'Hi there ' + name
  }

  res.send(body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})