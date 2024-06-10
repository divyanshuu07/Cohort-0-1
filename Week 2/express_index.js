// express is a library that gives u high level constructs to create http servers.

const express = require('express');

const app=express();
const port =3000;

app.get('/', function(req, res) {
  res.send("hello world");
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
});
