const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const packageRoutes = require("./routes/package");
const infoRoutes = require("./routes/info");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/package", packageRoutes);
app.use("/", infoRoutes);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port} ...`);
});
