const path = require('path');
const express = require("express");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,'../public'));

const publicDirectory = path.join(__dirname,'../public');

const app = express();

app.use(express.static(publicDirectory));

// configuring routes
// return html or json
// app.get("", (req, res) => {
//   res.send("<h1> weather </h1>");
// });


app.get("/weather", (req, res) => {
  res.send({location: 'Cali', weather: 'sunny'});
});

// start the server up

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
