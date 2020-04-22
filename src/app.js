const path = require("path");
const express = require("express");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const publicDirectory = path.join(__dirname, "../public");

const app = express();
app.set("view engine", "hbs");

// setup route

app.get("", (req, res) => {
  res.render("index", { title: "weather app", name: "Andres Cubillos " });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "this is the about page",
    description: "here you can meet us",
  });
});

app.get('/help', (req,res)=>{
  res.render('help',{contact: '328997766'})
})

app.use(express.static(publicDirectory));

// configuring routes
// return html or json
// app.get("", (req, res) => {
//   res.send("<h1> weather </h1>");
// });

app.get("/weather", (req, res) => {
  res.send({ location: "Cali", weather: "sunny" });
});

// start the server up

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
