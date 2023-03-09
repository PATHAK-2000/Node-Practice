const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/pages", (req,res) => {
    res.send([1,2,3])
})

app.get("/api/about/:id", (req,res) => {
    res.send(req.params)
})

app.get("/api/posts/:year/:month", (req,res) => {
    res.send(req.params)
})

app.get("/api/names", (req,res) => {
    res.send(req.query)
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log("Server started baby!!"))
