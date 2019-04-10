require("@babel/register");
const config = require("./webpack.config.js");

const path = require("path");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

config.watch = true;
const server = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, "/public/assets"),
    quiet: false,
    noInfo: false,
    publicPath: "http://localhost:7064/assets",
    historyApiFallback: false,
    stats: { colors: true },
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
    },
});

server.listen(7064, "localhost", () => {});
