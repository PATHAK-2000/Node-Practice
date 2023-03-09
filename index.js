const express = require("express");
const app = express();
app.use(express.json());

const courses = [
  {
    id: 1,
    courseName: "Python",
  },
  {
    id: 2,
    courseName: "JS",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/pages", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/about/:id", (req, res) => {
  res.send(req.params);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});

app.get("/api/names", (req, res) => {
  res.send(req.query);
});

app.get("/api/courses/all", (req, res) => {
  res.status(200).send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(400).send("Error!! Not found");
  res.status(200).send(course);
});

app.post("/api/courses/all", (req, res) => {
  const course = {
    id: courses.length + 1,
    courseName: req.body.courseName,
  };
  courses.push(course)
  res.send(course)
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started baby!!"));
