import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import viewEngine from "./config/viewEngine";
import initAuthRoutes from "./route/auth";
import initProductRouters from "./route/productRoutes";
import initCartRouters from "./route/cartRouters";
import initOrderRouters from "./route/orderRouters";
import initReviewRouters from "./route/reviewRouters";
import connectDB from "./config/connectDB";
import cors from "cors";

require("dotenv").config();

let app = express();

// config app
app.use(
    cors({
        origin: process.env.URL_REACT,
        credentials: true,
    })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

viewEngine(app);
initAuthRoutes(app);
initProductRouters(app);
initCartRouters(app);
initOrderRouters(app);
initReviewRouters(app);

connectDB();

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log("Backend NodeJS is running on port " + port);
});
