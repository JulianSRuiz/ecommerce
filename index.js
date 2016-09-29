const express = require("express");
const {json} = require("body-parser");
const mongoose = require("mongoose");
//const mongo = require("mongojs");
const app = express();
const cors = require("cors");
const port = 5000;
//const db = mongo("ecommerce", ["products"]);
const mongoUri = "mongodb://localhost:27017/store";


app.use(json());
app.use(cors());

mongoose.connect(mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${mongoUri}`));

require("./products/productRoutes")(app);
require("./orders/ordersRoutes")(app);
require("./users/userRoutes")(app);
require("./carts/cartRoutes")(app);


app.listen(port, () => console.log(`Listening on ${port}`));
