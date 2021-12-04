const axios = require("axios");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

console.log(__dirname);

const port = process.env.PORT || 8081;
const API_KEY = process.env.API_KEY;
app.listen(process.env.PORT || 8081, function () {
  console.log(`listening on port ${port}!`);
});
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
app.post("/nlp", function (req, res) {
  const { url } = req.body;
  const axiosUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`;
  axios
    .get(axiosUrl)
    .then((response) => {
      const { agreement, subjectivity, irony, confidence } = response.data;
      res.send({ agreement, subjectivity, irony, confidence });
    })
    .catch((err) => {
      res.status(400);
    });
});
