const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  const userEmail = req.headers['ngrok-auth-user-email'] || "Stranger";
  res.send(`
    <h1>Hi ${userEmail}!</h1>
    <p>So lovely to see you here!</p>
    <p><i>App running on port ${port}</i></p>
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
