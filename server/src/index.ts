import Express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import customer from "./controllers/customer.controller";

import product from "./controllers/product.controller";
import category from "./controllers/category.controller";
import auth from "./controllers/auth.controller";
import DBConfig from "./db/DBConnection";
import order from "./controllers/order.controller";


const app = Express();
app.use(bodyParser.json({limit:"10mb"}));
app.use(cors());

app.use("/api/v1/auth", auth);
app.use("/api/v1/customer", customer);
app.use("/api/v1/product", product);
app.use("/api/v1/category", category);
app.use("/api/v1/order", order);


app.get('/', (req, res) => {
    res.send("HEllO WORLD")
})

//change your server port it
app.listen(4000, () => {
    console.log("server is running")
    DBConfig();
})