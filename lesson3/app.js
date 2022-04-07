const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  if(req.headers['ngrok-auth-user-email']){
    res.send(`<h1>Hi ${ngrok-auth-user-email}</h1><p>So lovely to see you here!</p>`);
  }else{
    res.send("<h1>Hi Stranger</h1><p>I wish I knew who you are</p>");
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
