const path = require("path");

module.exports ={
    mode: "development",
    entry:".src/client/js/main.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname,"assets","js"),

    },
}