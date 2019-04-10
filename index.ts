if (process.env.DEV_MODE !== "false") {
    require("@babel/register");
    require("./src/server/index");
} else {
    require("./dist/server/index");
}
