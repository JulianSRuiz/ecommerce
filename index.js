const express = require("express");
const {json} = require("body-parser");
const mongoose = require("mongoose");
//const mongo = require("mongojs");
const app = express();
const routes = require("./routes/route.js");
const cors = require("cors");
const port = 5000;
//const db = mongo("ecommerce", ["products"]);
const mongoUri = "mongodb://localhost:27017/products";


app.use(json());
app.use(cors());
routes(app);

mongoose.connect(mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${mongoUri}`));

require("./routes/route")(app);


app.listen(port, () => console.log(`Listening on ${port}`));
