var express = require('express');
var app = express();
app.use(express.json())
const port = 3002;

//same function for get and post
app.all('/', function (req, res) {
   request = req.body;

   console.log(`=== New GitHub event: ${req.header("X-GitHub-Event")}`);   
   console.log(`=== GitHub message: ${request.zen} \n\n`);

   res.json({ message: "Thank you git" });
})

app.listen(port, function () {
   console.log(`Webhook service listening at ${port}`)
})