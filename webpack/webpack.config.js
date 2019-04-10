const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: {
        app: [
            "webpack-dev-server/client?http://localhost:7064",
            "webpack/hot/dev-server",
            "./src/client/index.tsx",
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        path: path.join(__dirname, "public/assets/"),
        filename: "[name].js",
        publicPath: "http://localhost:7064/assets/",
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]",
                    "postcss-loader",
                ],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader?sourceMap&localIdentName=[name]---[local]---[hash:base64:5]",
                    "postcss-loader",
                ],
            },
            { test: /\.png$/, use: "file-loader" },
            { test: /\.svg$/, use: "file-loader" },
            { test: /\.jpg$/, use: "file-loader" },
            { test: /\.gif$/, use: "file-loader" },
            { test: /\.mp3/, use: "file-loader" },
            { test: /\.jsx/, use: "file-loader" },
        ],
    },
    resolve: {
        extensions: [".js", ".mjs", ".jsx", ".json", ".css", ".ts", ".tsx"],
        modules: [path.join(__dirname, "src/client"), "node_modules"],
        alias: {
            ie: "component-ie",
        },
    },
    devtool: "#cheap-eval-source-map",
    cache: true,
};
