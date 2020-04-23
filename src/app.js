const path = require("path");
const express = require("express");
const hbs = require("hbs");

console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "../public"));

const app = express();

// Define paths for express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// setup handlebars engine and views locations
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicDirectory));

// defining routes
app.get("", (req, res) => {
  res.render("index", { title: "weather app", name: "Andres Cubillos " });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "this is the about page",
    description: "here you can meet us",
    name: "Andres Cubillos",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    contact: "328997766",
    name: "Andres Cubillos",
  });
});

// configuring routes
// return html or json
// app.get("", (req, res) => {
//   res.send("<h1> weather </h1>");
// });

app.get("/weather", (req, res) => {
  // get parameters
  if (!req.query.address) {
    return res.send({ error: "You must provive an address" });
  }
  res.send({
    location: "Cali",
    weather: "sunny",
    name: "Andres Cubillos",
    address: req.query.address,
  });
});

app.get("/help/*", (req, res) => {
  //res.send('Help article not found');
  res.render("error", { message: "Sorry!!!, that page does not exist." });
});

// 404 error page
app.get("*", (req, res) => {
  res.render("error", { message: "Sorry!!!, that page does not exist." });
});

// start the server up
app.listen(3000, () => {
  console.log("server is up on port 3000");
});
