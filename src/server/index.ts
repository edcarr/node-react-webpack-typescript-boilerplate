import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import config from "./config";

const app = express();

app.set("port", config.server.port);
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");
app.use("/", express.static("public"));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.raw({ limit: "50mb" }));
app.use(bodyParser.text({ limit: "50mb" }));

app.get("/", (req: Request, res: Response) => {
    res.render("index", {
        devServer: config.server.devMode,
    });
});

app.listen(app.get("port"), () => {
    console.log("listening on port:", app.get("port"));
});
