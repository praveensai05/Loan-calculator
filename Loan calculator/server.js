const express = require("express");
const app = express();
app.use(express.static('public'));
app.get("/", (req, res) => {
  res.sendFile(src+ "/index.html");
});
const port=3000
app.listen(3000, () => {
  console.log("Server is running on port "+port);
});