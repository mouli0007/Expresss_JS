// Express JS !

const express = require("express");
const app = express();

app.listen(5000, (a) => {
  console.log("Express is listening on port 5000 ");
});

 Genral HTTP Methods to use on express !

// app.get()
// app.post()
// app.put()
// app.delete()

 Other Methods ! for middlewares

// app.all()
// app.use()
// app.listen()

// Application Pages !

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});
const name = "Mouli VJ";

app.get("/about", (req, res) => {
  if (!name) {
    res.status(404).send("<h2>Error Page</h2>");
    return;
  }
  res.status(200).send("About Page");
  return;
});

app.all("*", (req, res) => {
  res.status(404).send("<h2>Error Page</h2>");
});
