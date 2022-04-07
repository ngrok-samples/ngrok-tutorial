var express = require('express');
var app = express();
app.use(express.json())
const port = 3002;

app.post('/', function (req, res) {
   request = req.body;
   // console.log(request);
   console.log(request.repository.full_name);
   console.log(request.zen);

   res.json({ message: "Thank you git" });
})

app.listen(port, function () {
   console.log(`Example app listening at ${port}`)
})